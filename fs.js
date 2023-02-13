 const fs = require("fs");

const quote = "No beauty shines brighter than that of good heart 💕✌"

fs.writeFile("./awesome.txt", quote, (err) => {
    console.log("completed writing");
})

//

const quote2 = "Live more ,worry less👀✌";

for (i = 1; i <= 10; i++) {
    fs.writeFile(`./backup/text${i}.html`, quote2, (err) => {
        console.log(`completed writing text${i}.html`);
    })
}

//another task to give number of files in command line //

const [, , no_of_files] = process.argv;
console.log(no_of_files);
const quote3 = "Happy pongal";
for (i = 1; i <= no_of_files; i++) {
    fs.writeFile(`./backup/file${i}.txt`, quote3, (err) => {
        console.log(`completed writing file${i}.txt`);
    })
}

//To read the file //

fs.readFile("./read.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error occured",err);
    }
    else{
        console.log("The content of the file is:",data);
    }
});

// To append or add info to the file //

const quote4 = "\n No beauty shines brighter than that of good heart 💕✌"

fs.appendFile("./append.txt", quote4, (err) => {
    console.log("succesfully added the quote");
})

//To delete the complete file//

fs.unlink("./remove.txt",(err)=>{
    console.log("Deleted the file");
})

//To read all the files //

fs.readdir("./backup",(err,files)=>{
console.log("All the file names:",files);
});

//To read and delete a particular file or delete every files in a folder //

// fs.readdir("./backup",(err,data)=>{
//     data.forEach((fileName)=>{
//         fs.unlink("./backup/text10.html",(err)=>{
//             console.log("Deleted",fileName);
//         });
//     });
// });

// fs.readdir("./backup",(err,data)=>{
//     data.forEach((fileName)=>{
//         fs.unlink(`./backup/${fileName}`,(err)=>{
//             console.log("Deleted",fileName);
//         });
//     });
// });

//use sync to add file in an ordered way //
//fs.writeFileSync , fs.readFileSync , fs.appendFileSync //
const quote5 = "nothing is impossible🤞😎"
const[, , n]=process.argv;

for(let i=1;i<=n;i++){
    false.writeFileSync(`./backup/file${i}.html`,quote5);
    console.log("file created",i);
}