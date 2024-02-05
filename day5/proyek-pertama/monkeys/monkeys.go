package monkeys

import "fmt"

func Monkeys() {
	var m1, m2 string = "senyum", "cemberut"

	if m1 == "senyum" && m2 == "senyum" {
		fmt.Println("saya dalam masalah")
	} else {
		fmt.Println("saya aman")
	}
}
