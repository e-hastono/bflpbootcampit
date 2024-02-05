package array

func ArrayNames() (int, int, [5]string, string) {
	var arr3 [4][5]string = [4][5]string{
		{"alvin", "arif", "reza", "rinaldi", "nina"},      //0
		{"noel", "dilla", "rosa", "juan michel", "teguh"}, //1
		{"septyan", "farras", "giyanda", "afin", "azwar"}, //2
		{"dionysius", "rifki", "raffi", "zain"},           //3
	}

	for i, row := range arr3 {
		for j, name := range row {
			if name == "noel" {
				return i, j, row, name
			}
		}
	}

	return -1, -1, [5]string{"", "", "", "", ""}, ""
}
