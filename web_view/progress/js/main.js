(function(window, document, undefined) {

  var Main = function(){
     //this is test data, data will come from a function call to the JAVA or XCODE
      this.data = [];
      for (var i = 1; i <= 160; i++) {
        this.data[i - 1] = {"running_time" : i * 5000, "workout_time": 10000 * i, "date" : i, "level_id" : i, "level_color": "#9362fa", "distance": 129.0960000000002};
      }
  }

  Main.prototype = {
    init: function() {
      
      this.margin = {top: 0, right: 0, bottom: 1, left: 0};
      this.height = window.innerHeight/1.5;
      this.winWidth = window.innerWidth;
      this.columnCornerRadius=10;
      this.columnWidth = 18;
      this.columnPadding = 10;
      this.chartWidth = this.data.length * (this.columnWidth + this.columnPadding);

      this.data.forEach(function(d) {
        d.date = new Date(d.date * 1000);
      });


      var that = this,
        prevSelected = null,
        prevSelectedColor = null,
        maxWorkoutTime = d3.max(this.data, function(d) { return d.workout_time; }),
        barsPadding = 0,
        dragStartX = 0;


       var x = d3.scale.ordinal().rangeRoundBands([0, this.chartWidth],.5)
        .domain(this.data.map(function(d) { return d.date; }));
      var y = d3.scale.linear().range([this.height, 0])
        .domain([0, maxWorkoutTime]);

      var zoom = d3.behavior.zoom()
        .scaleExtent([1, 1])
        .on("zoomstart", zoomStartEvent)
        .on("zoom", zoomEvent)
        .on("zoomend", zoomEndEvent);

      /*var drag = d3.behavior.drag()
        .origin(Object)
        .on("dragstart", dragstarted)
        .on("drag", dragging)
        .on("dragend", dragended);*/


      this.svg = d3.select("#content").append("svg")
        .attr("width", window.innerWidth + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
        .call(zoom);

      var vis = this.svg.selectAll("g")
        .attr("class", "g_main")
        .data(this.data);


      var bars = vis.enter()
          .append("g")
          .attr("transform", "translate(" + 0 + "," + barsPadding + ")");

      bars.append("rect")
          .attr("class", "bar")
          .attr('x', function (d) { return x(d.date); })
          .attr('y', function (d) { return y(d.workout_time); })
          .attr("width", this.columnWidth)
          .attr("height", function(d) { return that.height - y(d.workout_time); })
          .style("fill", function(d) { return d.level_color})
          .style("opacity", 0.5)
          .attr("rx", this.columnCornerRadius)
          .attr("ry", this.columnCornerRadius);
          
      bars.append("rect")
          .attr("class", "bar")
          .attr('x', function (d) { return x(d.date); })
          .attr('y', function (d) { return y(d.running_time); })
          .attr("width", this.columnWidth)
          .attr("height", function(d) { return that.height - y(d.running_time); })
          .style("fill", function(d) { return d.level_color})
          .attr("rx", this.columnCornerRadius)
          .attr("ry", this.columnCornerRadius);

      vis.on("click", function(item, i) {
        var infoDetail = document.getElementById("info-detail");
        var progressTime = document.getElementById("progress-time");
        var walkingTime = document.getElementById("walking-time");
        var distance = document.getElementById("distance");

        var progressTimeObj = that.getTime(item.workout_time);
        var walkingTimeObj = that.getTime(item.running_time);

        progressTime.innerHTML = progressTimeObj.minutes + ":" + progressTimeObj.seconds + " min";
        walkingTime.innerHTML = walkingTimeObj.minutes + ":" + walkingTimeObj.seconds + " min";
        distance.innerHTML = Math.floor(item.distance) + " m";

        infoDetail.style.display = "inline-block";
        that.showProgress();


        if(prevSelected && prevSelected.childNodes && prevSelected.childNodes[1]) {
          var prevChildren = prevSelected.childNodes;
          prevChildren[1].style.fill = prevSelectedColor;
        }

        var children = this.childNodes;

        if(!children[1]) return;

        prevSelectedColor = children[1].style.fill;


        children[1].style.fill = "#ffffff";

        prevSelected = this;
      });

      function dragstarted() {
        //  ToDo
      }

      function dragging() {
        //  ToDo
      }

      function dragended() {
        //  ToDo
      }


      var startPanX = 0;
      var zoomPanX = 0;
      var panX = 0;

      function zoomStartEvent() {
        startPanX = zoomPanX;
      }


      function zoomEvent() {

        panX = d3.event.translate[0];
        var w = that.winWidth - that.width;

        if(panX > 0) panX = 0;
        if(panX < w) panX = w;

        bars.attr("transform", "translate(" + panX+"," + barsPadding + ")");

        zoomPanX = panX;
      }



      function zoomEndEvent() {

       var dir = "left", 
         panX = zoomPanX,
         panDifference = Math.abs(zoomPanX - startPanX),
         targetSpace = 0;

        console.log("zoomEndEvent() panDifference ", panDifference);


        if(startPanX < zoomPanX) {
          dir = "right";
          targetSpace = zoomPanX - 0;
          panX *= 1;
        } else {
          targetSpace = zoomPanX - 0;
          panX *= 1;
        }

        console.log("zoomEndEvent() targetSpace ", targetSpace);
        

        bars.transition()
          .attr("transform", "translate(" + panX+"," + barsPadding + ")")
          .ease("quad-out")
          .duration(500)
      }
    },
    getTime: function(ms){

      var x = ms / 1000;
      var seconds = Math.round(x % 60);
      x /= 60;
      var minutes = Math.round(x % 60);
      x /= 60;
      var hours = Math.round(x % 24);
      x /= 24;
      var days = Math.round(x);

      return {"days" : days, "hours" : hours, "minutes" : minutes, "seconds" : seconds};
    },
    showProgress: function() {
      var progressDetail = document.getElementById("info-detail");
      progressDetail.style.display = "block";
      progressDetail.style.left = window.innerWidth/2 - progressDetail.offsetWidth/2 + "px";
      progressDetail.style.top = window.innerHeight - 40 + "px";
    },
    hideProgress: function() {
      var progressDetail = document.getElementById("progress");
      progressDetail.style.display = "none";
    }
  }

  window.Main = Main;

})(window, document);
