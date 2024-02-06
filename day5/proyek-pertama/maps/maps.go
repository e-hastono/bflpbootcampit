package maps

import (
	"math"
)

func ClosestTo10(a, b float64) (c float64) {
	diffA := math.Abs(10 - a)
	diffB := math.Abs(10 - b)

	c = 0

	if diffA < diffB {
		c = a
	} else if diffA > diffB {
		c = b
	}

	return
}

func ClosestTo10Variadic(nums ...float64) float64 {
	closestDistance := math.Abs(10 - nums[0])
	closestNumbers := []float64{nums[0]}

	for _, n := range nums[1:] {
		distance := math.Abs(10 - n)

		if distance <= closestDistance {
			if distance < closestDistance {
				closestDistance = distance
				closestNumbers = nil
			}
			closestNumbers = append(closestNumbers, n)
		}
	}

	if len(closestNumbers) == 1 {
		return closestNumbers[0]
	} else {
		return 0
	}
}

func HasThreeConsecutiveNumbers(nums ...int) bool {
	isTrue := false

	for i, n := range nums[:len(nums)-2] {
		if n == nums[i+1] && n == nums[i+2] {
			isTrue = true
			break
		}
	}

	return isTrue
}
