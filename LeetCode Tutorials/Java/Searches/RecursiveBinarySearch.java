public class RecursiveBinarySearch{

   public static int binarySearch(int[] arr, int target){
    return binarySearchHelper(arr, target, 0, arr.length - 1);
   }

   private static int binarySearchHelper(int[] arr, int target, int left, int right){
    if (left > right){
        return -1; // target not found
    }

    int mid = left + (right - left) / 2;
    if (arr[mid] == target){
        return mid;
    } else if (arr[mid] < target){
        return binarySearchHelper(arr, target, mid + 1, right);
    } else {
        return binarySearchHelper(arr, target, left, mid - 1);
    }
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
    
        int target = 10;
        int result = binarySearch(array, target);
        if (result == -1){
            System.out.println("Element not present in array");
        } else {
            System.out.println("Element found at index " + result);
        }
    }
}