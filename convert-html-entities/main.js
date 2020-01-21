function convertHTML(str) {
    let array = str.split("");
    for (let i = 0; i < array.length; i++){
        switch (array[i]) {
          case '<':
            array[i] = '&lt;'
            break
          case '>':
            array[i] = '&gt;'
            break
          case '&':
            array[i] = '&amp;'
            break
          case  '"':
            array[i] = "&quot;"
            break;
          case "'":
            array[i] = "&apos;"
            break   
        }
    }
    return array = array.join("");
  }
  
console.log(convertHTML("Dolce & Gabbana"));
// output: Dolce &amp; Gabbana

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// output: Hamburgers &lt; Pizza &lt; Tacos

console.log(convertHTML("Sixty > twelve"));
// output: Sixty &gt; twelve

console.log(convertHTML('Stuff in "quotation marks"'));
// output: Stuff in &quot;quotation marks&quot;

console.log(convertHTML("Schindler's List"));
// output: Schindler&apos;s List

console.log(convertHTML("<>"));
// output: &lt;&gt;

console.log(convertHTML("abc"));
  // output: abc

  