import pandas as pd
from datetime import timedelta

# === Load CSVs ===
folder = "your folder here"
food_path = f"{folder}/dailysummary.csv"
exercise_path = f"{folder}/exercises.csv"

food_df = pd.read_csv(food_path)
exercise_df = pd.read_csv(exercise_path)

food_df["Date"] = pd.to_datetime(food_df["Date"])
exercise_df["Day"] = pd.to_datetime(exercise_df["Day"])

# === Group & Merge Data ===
exercise_burn = (
    exercise_df.groupby("Day")["Calories Burned"]
    .sum()
    .abs()
    .reset_index()
    .rename(columns={"Calories Burned": "Calories Burned"})
)

food_df = food_df[food_df["Date"] >= "2025-04-01"]

merged_df = pd.merge(
    food_df[["Date", "Energy (kcal)"]],
    exercise_burn,
    how="left",
    left_on="Date",
    right_on="Day"
)

merged_df["Calories Burned"] = merged_df["Calories Burned"].fillna(0)
merged_df["TEF"] = merged_df["Energy (kcal)"] * 0.10
merged_df["True Expenditure"] = merged_df["Calories Burned"] + merged_df["TEF"]
merged_df["Adjusted Net Calories"] = merged_df["Energy (kcal)"] - merged_df["True Expenditure"]

# === Save merged file ===
merged_df.to_csv(f"{folder}/merged_summary.csv", index=False)

# === Analyze cutting phase ===
TDEE = 2900
valid_df = merged_df.dropna(subset=["Adjusted Net Calories"]).copy()
valid_df = valid_df[valid_df["Date"] >= "2025-04-01"].reset_index(drop=True)
valid_df["Deficit"] = valid_df["Adjusted Net Calories"] < TDEE

cut_start_date = None
for i in range(len(valid_df) - 6):
    window = valid_df.iloc[i:i+7]
    if window["Deficit"].sum() >= 5:
        cut_start_date = window.iloc[0]["Date"]
        break

if cut_start_date:
    print(f"📆 Cut likely began on: {cut_start_date.date()}")

    cut_df = valid_df[valid_df["Date"] >= cut_start_date].copy()
    cut_df["Daily Deficit"] = TDEE - cut_df["Adjusted Net Calories"]

    cut_df["Week Start"] = cut_df["Date"].apply(
        lambda d: cut_start_date + timedelta(days=((d - cut_start_date).days // 7) * 7)
    )

    weekly_summary = (
        cut_df.groupby("Week Start")["Daily Deficit"]
        .sum()
        .reset_index()
        .rename(columns={"Daily Deficit": "Weekly Deficit (kcal)"})
    )
    weekly_summary["Estimated Weight Loss (lbs)"] = weekly_summary["Weekly Deficit (kcal)"] / 3500

    # === Save original summary ===
    output_weekly = f"{folder}/Weekly_Calorie_Deficit_Summary.csv"
    weekly_summary.to_csv(output_weekly, index=False)
    print(f"📊 Weekly deficit summary saved to: {output_weekly}")

    # === Save cleaned version ===
    clean_csv_path = f"{folder}/Clean_Weekly_Summary.csv"
    weekly_summary_cleaned = weekly_summary.copy()
    weekly_summary_cleaned["Weekly Deficit (kcal)"] = weekly_summary_cleaned["Weekly Deficit (kcal)"].round(0).astype(int)
    weekly_summary_cleaned["Estimated Weight Loss (lbs)"] = weekly_summary_cleaned["Estimated Weight Loss (lbs)"].round(2)
    weekly_summary_cleaned.to_csv(clean_csv_path, index=False)
    print(f"🧾 Clean summary saved to: {clean_csv_path}")

    # === Plot chart ===
    import matplotlib.pyplot as plt

    plt.figure(figsize=(12, 6))
    plt.bar(weekly_summary["Week Start"].dt.strftime("%b %d"), weekly_summary["Weekly Deficit (kcal)"], color='skyblue')
    plt.title("Weekly Calorie Deficit")
    plt.xlabel("Week Starting")
    plt.ylabel("Deficit (kcal)")
    plt.xticks(rotation=45)
    plt.tight_layout()

    chart_path = f"{folder}/weekly_deficit_chart.png"
    plt.savefig(chart_path)
    print(f"📊 Chart saved to: {chart_path}")

else:
    print("❗ Could not detect a consistent cutting period.")

