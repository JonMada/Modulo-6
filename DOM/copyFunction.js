const allTopics = document.querySelectorAll('.topics') //Seleccionamos todos lo elementos con la clase "topics"

allTopics

copy(allTopics)

const arrtopicssample = Array.prototype.slice.call(allTopics); //Convertimos los topics en un array

arrtopicssample

arrtopicssample[0]

arrtopicssample[0].textContent

const sampleTopicList = arrtopicssample.map(e => e.textContent) //Seleccionamos el contenido de cada elemento del array

copy(sampleTopicList)