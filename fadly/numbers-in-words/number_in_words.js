function in_words(angka) {
  var len = angka.toString().length;
  var arr = angka.toString().split("");
  var result = [];


  if(arr[0] === "1" || arr[3] == "1" || arr[6] == "1" || arr[9] == "1" || arr[12] == "1")
     {
       result.push("SERATUS");
     }
  for(var x = 0; x < len;x++)
     {
       if(arr[x] === "2")
         {
           result.push("DUA");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "3")
         {
           result.push("TIGA");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10|| x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "4")
         {
           result.push("EMPAT");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "5")
         {
           result.push("LIMA");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "6")
         {
           result.push("ENAM");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "7")
         {
           result.push("TUJUH");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "8")
         {
           result.push("DELAPAN");

           if(x == 0 || x == 3 || x == 6 || x == 9 || x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "9")
         {
           result.push("SEMBILAN");

           if(x == 0 || x == 3 || x == 6 || x == 9|| x == 12)
             {
               result.push("RATUS");
             }

           if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13)
             {
               result.push("PULUH");
             }
         }
     }

   if((arr[1] == "1" && arr[2] > 1) || (arr[4] == "1" && arr[5] > 1) || (arr[7] == "1" && arr[8] > 1) || (arr[10] == "1" && arr[11] > 1) || (arr[13] == "1" && arr[14] > 1))
     {
       result.push("BELAS");
     }
   if(arr[1] === "1" && arr[2] === "0")
     {
       result.push("SEPULUH");
     }
   if(arr[1] === "1" && arr[2] === "1")
     {
       result.push("SEBELAS");
     }


   if(arr[2] === "1" && arr[1] !== "1")
     {
       result.splice(8,0,"SATU");
     }
   if(arr[5] === "1" && arr[4] !== "1")
     {
       result.splice(4,0,"SATU");
     }
  if(arr[8] === "1" && arr[7] !== "1")
     {
       result.splice(14,0,"SATU");
     }
  if(arr[11] === "1" && arr[10] !== "1")
     {
       result.splice(19,0,"SATU");
     }
  if(arr[14] === "1" && arr[13] !== "1")
     {
       result.splice(30,0,"SATU");
     }


  if (len == 6) {
    result.splice(5,0,"RIBU");
  }
  if (len == 9) {
    result.splice(5,0,"JUTA");
    result.splice(11,0,"RIBU");
  }
  if (len == 12) {
    result.splice(5,0,"MILIAR");
    result.splice(11,0,"JUTA");
    result.splice(17,0,"RIBU");
  }
  if (len == 15) {
    result.splice(5,0,"TRILIUN");
    result.splice(11,0,"MILIAR");
    result.splice(17,0,"JUTA");
    result.splice(23,0,"RIBU");
  }
  return result;
  // Your code here
}

// Driver code
console.log(in_words(1000000));
