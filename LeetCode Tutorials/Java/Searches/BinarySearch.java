
public class BinarySearch {
    

    int binarySearch(int[] arr, int target){
        int left = 0;
        int right = arr.length - 1;
        
        while (right >= left){
            int mid = left + (right - left) / 2;
            if (arr[mid] == target){
                return mid;
                
            } else if (arr[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }

    public static void printArray(int[] arr){
        for (int num : arr){
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        int[] array = {2, 3, 4, 10, 40};
        System.out.println("Original array:");
        printArray(array);

        BinarySearch bs = new BinarySearch();
        int target = 10;
        int result = bs.binarySearch(array, target);
        if (result == -1){
            System.out.println("Element not present in array");
        } else {
            System.out.println("Element found at index " + result);
        }
    }
    
}

