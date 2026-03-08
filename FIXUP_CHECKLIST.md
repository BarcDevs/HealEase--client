# Check-in System Fixup Checklist

## Files Restored
- 46 production files restored
- 4 missing UI components created
- 4 skeleton loaders created
- Constants and types updated

## Remaining Errors to Fix

### 1. Type Mismatches in CheckIn
Current: mood, pain, energy
Used as: moodScore, painLevel
Fix: Update type definitions to match actual usage

### 2. Missing Error Utility
- `@/utils/error` not found
- Need: `extractErrorMsg` function

### 3. API Functions Mismatch
- createCheckIn (have: submitCheckIn)
- patchCheckIn (missing entirely)
- Need: updateCheckIn

### 4. Handler Exports
- handleCheckInSave (not exported)
- newCheckInLoader (not exported)

### 5. Stats Properties
- Need: totalCheckIns, averageMoodScore, averagePainLevel
- Have: total, avgMood, avgPain

### 6. CheckInStats Component
- Import path issue (missing .tsx)
- Component may not exist

### 7. Constants/Defaults
- maxSuggestedActivities missing from DEFAULTS

### 8. CheckInHistoryList Props
- Uses `items` but expects `checkIns`

### 9. Button Labels in BUTTONS constant
- Need: updateCheckIn, newCheckIn

## Priority Fixes
1. Fix type mismatches (mood/moodScore)
2. Create error utility
3. Fix API function names
4. Update handler exports
5. Fix component imports
