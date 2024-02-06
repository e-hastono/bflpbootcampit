package main

import (
	"fmt"
	"strconv"
	// "proyek-pertama/chicken"
	// "proyek-pertama/monkeys"
	// "time"
)

func main() {
	// time.Sleep(2 * time.Second)
	// fmt.Println("proyek pertama")
	// time.Sleep(2 * time.Second)

	// monkeys.Monkeys()
	// fmt.Println(chicken.Chicken(true, 2))
	// fmt.Println(chicken.Chicken(true, 23))
	// fmt.Println(chicken.Chicken(true, 0))
	// fmt.Println(chicken.Chicken(false, 3))

	// fmt.Println(array.ArrayNames())

	// fmt.Println(maps.ClosestTo10(-1, -2))
	// fmt.Println(maps.ClosestTo10(1, -2))
	// fmt.Println(maps.ClosestTo10(8, 12))
	// fmt.Println(maps.ClosestTo10(11, 12))
	// fmt.Println(maps.ClosestTo10(11, 9))

	// fmt.Println(maps.ClosestTo10Variadic(1, 2, 3, 4, 5, 6, 7, 8, 9))
	// fmt.Println(maps.ClosestTo10Variadic(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14))
	// fmt.Println(maps.ClosestTo10Variadic(-9, -8, 1, 2, 3, 4, 5, 6, 7, 8))

	// fmt.Println(maps.HasThreeConsecutiveNumbers(1, 1, 1, 2, 3, 4, 1))
	// fmt.Println(maps.HasThreeConsecutiveNumbers(1, 1, 2, 3, 4, 1, 1, 2, 2, 2))
	// fmt.Println(maps.HasThreeConsecutiveNumbers(1, 1, 2, 3, 4, 1))

	// var hasThreeConsecutiveNumbers = func(nums ...int) bool {
	// 	isTrue := false

	// 	for i, n := range nums[:len(nums)-2] {
	// 		if n == nums[i+1] && n == nums[i+2] {
	// 			isTrue = true
	// 			break
	// 		}
	// 	}

	// 	return isTrue
	// }

	// fmt.Println(hasThreeConsecutiveNumbers(1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8))

	// fmt.Println(func(nums ...int) bool {
	// 	isTrue := false

	// 	for i, n := range nums[:len(nums)-2] {
	// 		if n == nums[i+1] && n == nums[i+2] {
	// 			isTrue = true
	// 			break
	// 		}
	// 	}

	// 	return isTrue
	// }(1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 4, 5, 2, 2, 1, 9, 8))

	x := getLastDigits(1, 20, 937)
	fmt.Println(x())

	y := getLastDigits(1, 20, 937, 23, 92)
	fmt.Println(y())
}

func getLastDigits(x ...int) func() []int {
	return func() []int {
		var lastDigits []int

		for _, n := range x {
			nString := strconv.Itoa(n)
			lastDigitString := nString[len(nString)-1:]
			lastDigit, _ := strconv.Atoi(lastDigitString)
			lastDigits = append(lastDigits, lastDigit)
		}

		return lastDigits
	}
}
