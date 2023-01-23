package main

import (
	"fmt"
	"path"
)

func main() {
	// var name string
	// fmt.Println("Write your name please")
	// fmt.Scan(&name)

	// fmt.Println(name + " Hello")

	// textHello := "Hello"
	// var num int = 5
	// fmt.Println(textHello + fmt.Sprint(num))

	// for i := 0; i < 5; i++ {
	// 	fmt.Print(i)
	// }

	// text := "Hello"

	// for i := 0; i < len(text); i++ {
	// 	fmt.Println(text[i])

	// }

	// textArr := []string{"be", "was", "were"}

	// fmt.Println(textArr[len(textArr)-1])

	// for _, v := range textArr {
	// 	fmt.Println(v)
	// }

	arr := [5]int{}
	fmt.Println(len(arr))

	for i := 1; i < 5; i++ {
		arr[i] = 1
	}

	fmt.Println(arr)

	carta := map[string]string{
		"x": "f",
		"h": "p",
	}

	fmt.Print(carta)

	func (path string) , ()  {
		fmt.Print()
	}

}
