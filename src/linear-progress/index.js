const linearProgressStyles = require("./index.style");
const linearProgress = (data = {}) => {
  const { skill, value, design, fill } = data;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="100">
<style>
${linearProgressStyles(fill, value)}
</style>
  <foreignObject width="250" height="100">
  <div xmlns="http://www.w3.org/1999/xhtml">
  <div class="ProgressTitle">${skill}</div>
  <div
    class="progress ${design ? design : "plain"}"
    data-width="0%"
  >
    <div class="ProgressText">
      ${value}
      %
    </div>
    <div  class="ProgressBars" style="width:${value}%;" >
      <div  class="ProgressText">
      ${value}
        %
      </div>
    </div>
  </div>
  </div>
    <script>
      const div = document.querySelector('.ProgressBars');
      const fillBar = target =>{
      const io = new IntersectionObserver((entries, observer)=>{
       entries.forEach( entry => {
        if(entry.isIntersecting){
          const myDiv = entry.target;
          myDiv.classList.add('fillAnimation');
          observer.disconnect();
          }
         });
      });
      io.observe(target);
     };
     fillBar(div);
    </script>
  </foreignObject>
</svg>
    `;
};

module.exports = linearProgress;
