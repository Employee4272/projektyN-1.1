console.log("Start");

let input_value;
let output_value;

let komentarz_value = document.getElementById("komentarz");;



function wywolacz() {
    input_value = document.getElementById("wejscie").value;
    output_value = document.getElementById("wyjscie").value;

    //poprawny format
    if (input_value != '' && output_value != '') {
        function format() {
            //długość formatu i sprawdzanie czy znaki są liczbą
            let k = input_value.length;
            let prawda1 = true;
            let prawda2 = true;
            let liczba_prawdy = true;
            for (let i = 0; i < k; i++) {
                //console.log(i);
                if (i != 9) {
                    prawda1 = false;
                    komentarz_value.innerHTML = " || zły format w dacie wejściowej 1 || ";

                }
                else if (i == 9) {
                    prawda1 = true;
                }

                //sprawdzanie czy znaki są liczbą
                if (input_value.charAt(2) == '-' && input_value.charAt(5) == '-' && (i == 2 || i == 5)) {
                    //liczba_prawdy = true; jeśli porawnie powinno zwracać true
                    //console.log(liczba_prawdy+" -");
                } else if (Number.isNaN(parseInt(input_value.charAt(i)))) {
                    liczba_prawdy = false;
                    //console.log(liczba_prawdy + " parseInt(input_value.charAt(i)) === NaN " + i);
                }


            }
            k = output_value.length;

            for (let i = 0; i < k; i++) {
                //console.log(i);
                if (i != 9) {
                    prawda2 = false;
                    komentarz_value.innerHTML = " || zły format w dacie wyjściowej 1 || ";

                }
                else if (i == 9) {
                    prawda2 = true;
                }

                //sprawdzanie czy znaki są liczbą
                if (output_value.charAt(2) == '-' && output_value.charAt(5) == '-' && (i == 2 || i == 5)) {
                    //liczba_prawdy = true;
                    //console.log(liczba_prawdy+" output_value.charAt(i) != '-' && i == 2 || i == 5");
                } else if (Number.isNaN(parseInt(output_value.charAt(i)))) {
                    liczba_prawdy = false;
                    // console.log(liczba_prawdy + " parseInt(output_value.charAt(i)) === NaN");
                }

            }

            if (prawda1 === false && prawda2 === false)
                komentarz_value.innerHTML = " || błędny format w obu datach || ";



            //myślnik w formacie
            if (prawda1 === true && prawda2 === true) {
                if (input_value.charAt(2) != '-' || input_value.charAt(5) != '-') {
                    komentarz_value.innerHTML = " || zły format w dacie wejściowej (brak -) || ";
                    prawda1 = false;
                }
                else if (input_value.charAt(2) == '-' && input_value.charAt(5) == '-') {
                    prawda1 = true;
                }
                if (output_value.charAt(2) != '-' || output_value.charAt(5) != '-') {
                    komentarz_value.innerHTML = " || zły format w dacie wyjściowej (brak -) || "
                    prawda2 = false;
                }
                else if (output_value.charAt(2) == '-' && output_value.charAt(5) == '-') {
                    prawda1 = true;
                }
                if (liczba_prawdy == false) {
                    komentarz_value.innerHTML += " || format niewpełni cyfrowy || ";
                }
            }
            //WIELKA ZAMIANA
            if (prawda1 && prawda2 && liczba_prawdy) {
                komentarz_value.innerHTML = "<span class='dobry_format'> |+| poprawny format :D |+| </span>";

                let data_input_Y = input_value.charAt(6) + input_value.charAt(7) + input_value.charAt(8) + input_value.charAt(9);//rok          
                data_input_Y = parseInt(data_input_Y);
                let data_input_M = input_value.charAt(3) + input_value.charAt(4);//miesiąc
                data_input_M = parseInt(data_input_M);
                let data_input_D = input_value.charAt(0) + input_value.charAt(1);//dnień
                data_input_D = parseInt(data_input_D);

                let data_output_Y = output_value.charAt(6) + output_value.charAt(7) + output_value.charAt(8) + output_value.charAt(9);//rok          
                data_output_Y = parseInt(data_output_Y);
                let data_output_M = output_value.charAt(4) + output_value.charAt(5);//miesiąc
                data_output_M = parseInt(data_output_M);
                let data_output_D = output_value.charAt(0) + output_value.charAt(1);//dnień
                data_output_D = parseInt(data_output_D);

                //dla inputa
                if (data_input_M > 12 || data_input_M < 1) {
                    komentarz_value.innerHTML = " || nie poprawna ilość miesięcy || ";
                    liczba_prawdy = false;
                }
                else {
                    switch (data_input_M) {
                        case 1:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni || ";
                                liczba_prawdy = false;
                            }
                            break;
                        case 2:
                            if (((data_input_Y % 4 == 0) && (data_input_Y % 100 != 0)) || (data_input_Y % 400 == 0)) {
                                if (data_input_D > 29 || data_input_D < 1) {
                                    komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej (luty)|| ";
                                    liczba_prawdy = false;
                                }

                            }
                            else {
                                if (data_input_D > 28 || data_input_D < 1) {
                                    komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej (luty)|| ";
                                    liczba_prawdy = false;
                                }
                            }

                            break;

                        case 3:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 4:
                            if (data_input_D > 30 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 5:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 6:
                            if (data_input_D > 30 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 7:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 8:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 9:
                            if (data_input_D > 30 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 10:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 11:
                            if (data_input_D > 30 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 12:
                            if (data_input_D > 31 || data_input_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;
                    }
                }

                //dla outputa
                if (data_output_M > 12 || data_output_M < 1) {
                    komentarz_value.innerHTML = " || nie poprawna ilość miesięcy || ";
                    liczba_prawdy = false;
                }
                else {
                    switch (data_output_M) {
                        case 1:
                            if (data_output_D > 31) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni || ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 2:
                            if (((data_output_Y % 4 == 0) && (data_output_Y % 100 != 0)) || (data_output_Y % 400 == 0)) {

                                if (data_output_D > 29 || data_output_D < 1) {
                                    komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                    liczba_prawdy = false;
                                }

                            }
                            else {
                                if (data_output_D > 28 || data_output_D < 1) {
                                    komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                    liczba_prawdy = false;
                                }
                            }

                            break;

                        case 3:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 4:
                            if (data_output_D > 30 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 5:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 6:
                            if (data_output_D > 30 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 7:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 8:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 9:
                            if (data_output_D > 30 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 10:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 11:
                            if (data_output_D > 30 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;

                        case 12:
                            if (data_output_D > 31 || data_output_D < 1) {
                                komentarz_value.innerHTML = " || nie poprawna ilość dni w datacie wejściowej|| ";
                                liczba_prawdy = false;
                            }
                            break;
                    }
                }
                const dni_miesiency = { 
                "1": 31,
                "2": 28,
                "3": 31,
                "4": 30,
                "5": 31,
                "6": 30,
                "7": 31,
                "8": 31,
                "9": 30,
                "10": 31,
                "11": 30,
                "12": 31
                }
                if((((data_output_Y % 4 == 0) && (data_output_Y % 100 != 0)) || (data_output_Y % 400 == 0)))
                {
                    dni_miesiency.lutego = 29;
                }


                let month_to_days_input = 0;
                let month_to_days_output = 0;

                //input miesiące na dni
                if(data_input_M > 1)
                for(let i = 1; i <= data_input_M-1;i++)
                {
                    month_to_days_input += dni_miesiency[i];
                }

                //output miesiące na dni
                if(data_output_M > 1)
                for(let i = 1; i <= data_output_M-1;i++)
                {
                    //console.log(i);
                    
                    month_to_days_output += dni_miesiency[i];
                }

               



                //transformacja różnicy dat na parametry
                let year=  Math.abs(data_input_Y - data_output_Y); //liczone w latach

                let year2_not_active = year;//liczenie dni w latach przesępnych
                bad_year_counter = 0;
                    for(let i = 0; i < year;i++)
                    {
                        if((((year2_not_active % 4 == 0) && (year2_not_active % 100 != 0)) || (year2_not_active % 400 == 0)))
                        {
                            bad_year_counter++;
                        }
                        year2_not_active--;
                    }
                year = year * 365 + bad_year_counter; // liczenie róznicy lat w dniach
                console.log("różnica lat w dniach: "+year);
                let roz_month = Math.abs(month_to_days_input - month_to_days_output); //liczone w dniach
                console.log("róznica miesięcy w dniach: "+roz_month);
                let roz_days = Math.abs(data_input_D - data_output_D); //liczone w dniach
                console.log("różnica dni: "+roz_days);


                //KOŃCOWA WARTOŚĆ WYSYŁANA DO FORMULARZA
                let value_S = (year + roz_month + roz_days) * 24 * 60 * 60;
                let sekund_value = document.getElementById("sekund");
                sekund_value.innerHTML = value_S;

                let value_M =  (year + roz_month + roz_days) * 24 * 60;
                let minut_value = document.getElementById("minut");
                minut_value.innerHTML = value_M;

                let value_G =  (year + roz_month + roz_days) * 24;
                let godzin_value = document.getElementById("godzin");
                godzin_value.innerHTML = value_G

                let value_D = year + roz_month + roz_days;
                let dni_value  = document.getElementById("dni");
                dni_value.innerHTML = value_D;




            }
        }
        format();
    }
    else {
        komentarz_value.innerHTML = "Dwa pole są puste";
    }




    return console.log("funkcja wywolacz() zrealizowana");

};

console.log("Koniec");
/*
zrobione:
-transformacja różnicy dat na parametry
- teraz istanieje błąd że jak dodajemy miesiące dako dni np 3 lutego(03-02-2001) to zamiast 34 dni wyskakuję 62 lub 63 zalezy 
czy rok przestepny. 
Trzeba dodać nową zmienną która jest różnicą odjęcia dni danej daty od ich dni miesięcy np 29 02 2000, 

ilość dni w roku 29-02-2000 to (rok przestępny) 29 + 29 + 31 = 89
02 = 31+29 = 60 to ilość dni miesięcy
29 to ilość dni daty

01-01 = 1 dzień
31-01 = 31 dzień

wczytuję wartości miesięcy dopiero wtedy kiedy 
dzień miesiąca jest większy od stycznia i wczytuję tylko
miesiące za nim
01-02
styczeń = 31 dni
01 = 1 dzień
31 + 1 = 32 dni

i wiele więcej błędów

można zrobić:
-css
-Switch statement for multiple cases in JavaScript np case "afshin", "saeed", "larry":
*/


