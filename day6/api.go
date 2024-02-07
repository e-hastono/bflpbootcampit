package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"text/template"
)

type Employee struct {
	ID       int
	Name     string
	Age      int
	Division string
}

var Employees = []Employee{
	{1, "Airell", 23, "IT"},
	{2, "Nanda", 23, "Finance"},
	{3, "Mailo", 20, "IT"},
}

const PORT = ":8080"

func main() {
	http.HandleFunc("/employees", getEmployees)
	http.HandleFunc("/employee", createEmployee)

	fmt.Println("Application is listening on port ", PORT)
	http.ListenAndServe(PORT, nil)
}

func getEmployees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "GET" {
		tpl, err := template.ParseFiles("template.html")

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		tpl.Execute(w, Employees)
		return
	}

	http.Error(w, "Invalid Method", http.StatusBadRequest)
}

func createEmployee(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "POST" {
		name := r.FormValue("name")
		age := r.FormValue("age")
		division := r.FormValue("division")

		convertAge, err := strconv.Atoi(age)

		if err != nil {
			fmt.Println(err.Error())
			http.Error(w, "Invalid Age", http.StatusBadRequest)
			return
		}

		newEmployee := Employee{len(Employees) + 1, name, convertAge, division}

		Employees = append(Employees, newEmployee)

		json.NewEncoder(w).Encode(newEmployee)
		return
	}

	http.Error(w, "Invalid Method", http.StatusBadRequest)
}
