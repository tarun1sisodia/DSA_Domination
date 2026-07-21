class Solution {

    int cnt = 0;
    public int reversePairs(int[] nums) {
        int n = nums.length;
        mergeSort(nums, 0, n-1);
        return cnt;
    }

    private void mergeSort(int[] nums, int low, int high) {
        if (low >= high) return;
        int mid = low + (high - low) / 2;

        mergeSort(nums, low, mid);
        mergeSort(nums, mid + 1, high);
        countReversePairs(nums, low, mid, high);
        merge(nums, low, mid, high);
    }

    private void countReversePairs(int[] nums, int low, int mid, int high) {

        int right = mid + 1;
        for (int left = low; left <= mid; left++) {
            while (right <= high && (long) nums[left] > 2L * nums[right]) {
                right++;
            }
            cnt += right - (mid + 1);
        }
    }

    private void merge(int[] nums, int low, int mid, int high) {

        ArrayList<Integer> temp = new ArrayList<>();
        int left = low;
        int right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.add(nums[left]);
                left++;
            } else {
                temp.add(nums[right]);
                right++;
            }
        }
        while (left <= mid) {
            temp.add(nums[left]);
            left++;
        }
        while (right <= high) {
            temp.add(nums[right]);
            right++;
        }
        for (int i = low; i <= high; i++) {
            nums[i] = temp.get(i - low);
        }
    }
}