$(function(){
    populateBreakouts();
});

function populateLabels(apiResponseData) {
    var labels = '';
    $.each(apiResponseData['labels'], function (i, label) {
        labels += "<span class='label label-info' style='background-color:#" + label['color'] + "'>" + label['name'] + "</span> ";
    });
    return labels;
}

function populateBreakouts() {
    //grab issue list from GitHub
    var githubApiUrl = "https://api.github.com/repos/ProgressiveHackNight/project-ideas/issues?state=open&direction=asc";
    $.when( $.getJSON( githubApiUrl ) ).then(function(data, textStatus, jqXHR ) {
        $.each(data, function(i, json) {
            console.log(json);
          json['opened-on'] = moment(json['created_at']).fromNow();
          var labels = populateLabels(json);

          var html = "\
          <tr>\
            <td>\
              <h4><strong><a href='" + json['html_url'] + "' target='_blank'>" + json['title'] + "</a></strong> " + labels + "</h4>\
              <p>Started " + json['opened-on'] + " by <a href='" + json['user']['html_url'] + "' target='_blank'>" + json['user']['login'] + "</a></p>\
            </td>\
          </tr>\
          ";

          $("#working-groups").append(html);
        });
    });
}