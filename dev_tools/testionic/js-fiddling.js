
lengths =
{
    "chapter1":2,
    "chapter2":4,
    "chapter10"14
    }
    
ng-repeat

for i in range(lengths[chapterSelected] :
    build element "<a href=/"" + chapterSelect + "//#section" + {i+1} + ">"Section" + (i+1) + "/""</a>
    
    
var populateStates = function () {
    angular.forEach(lengths, function(chapter) {
    
        chapter.forEach(function(num) {
       $stateProvider.state("chapter{chapter}section{num}",
    
            {url:{chapter/section{num},
            templateurl: "templates/chapters/{chapter}/section{num}.html",
            controller: chapter{chapter}section{num}Ctrl
            
            );
    };
};