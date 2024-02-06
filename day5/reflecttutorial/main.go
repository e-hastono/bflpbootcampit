package main

import (
	"fmt"
	"reflect"
)

type Direktorat struct {
	nama   string
	alamat string
}

type Employee struct {
	nik        string
	nama       string
	umur       uint
	divisi     string
	direktorat Direktorat
}

type Employees []Employee

func (es *Employees) reflectEmployees() {
	for i, e := range *es {
		fmt.Println("Karyawan #", i)
		reflectValue := reflect.ValueOf(e)

		if reflectValue.Kind() == reflect.Ptr {
			reflectValue = reflectValue.Elem()
		}

		reflectType := reflectValue.Type()

		for i := 0; i < reflectValue.NumField(); i++ {
			fmt.Println("Nama      : ", reflectType.Field(i).Name)
			fmt.Println("Tipe Data : ", reflectType.Field(i).Type)
			fmt.Println("Nilai     : ", reflectValue.Field(i))
			fmt.Println("")
		}
		fmt.Println("")
	}
}

func (es *Employees) getOldestEmployee() Employee {
	var oldestEmployee = (*es)[0]

	for i, e := range *es {
		if e.umur > oldestEmployee.umur {
			oldestEmployee = (*es)[i]
		}
	}

	return oldestEmployee
}

func main() {
	currentEmployees := Employees{
		{"123", "Thomas", 25, "APP", Direktorat{"BRI Ex-Corpu", "Ragunan"}},
		{"124", "Jackson", 30, "ISG", Direktorat{"BRI Kantor Pusat", "Sudirman"}},
		{"125", "Harley", 31, "ISC", Direktorat{"BRI Ex-Corpu", "Ragunan"}},
		{"126", "Dominic", 27, "DDB", Direktorat{"BRI Kantor Pusat", "Sudirman"}},
	}

	currentEmployees.reflectEmployees()

	fmt.Println(currentEmployees.getOldestEmployee())
}
