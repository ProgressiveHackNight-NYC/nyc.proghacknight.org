setUp();

function setUp() {
    initEventListeners();
    populateBreakouts();
}

function initEventListeners() {
    $('.selectpicker').on('change', handleProjectFilterClick);
}

function handleProjectFilterClick() {
    var labels = $('.selectpicker').val();
    populateBreakouts(labels);
}

/**
 * Call this function on page load to populate the list of working groups
 */
function populateBreakouts(labels) {
    var githubApiUrl = "https://api.github.com/repos/ProgressiveHackNight/project-ideas/issues?state=open&direction=asc";
    var html = "";
    if (labels) {
        $.each(labels, function(i, label) {
           githubApiUrl += '&labels='+label;
        });
    }
    // grab issue list from GitHub
    $.when( $.getJSON( githubApiUrl ) ).then(function(data, textStatus, jqXHR ) {
        var labelsForFilter = [];
        $.each(data, function(i, json) {
          json['opened-on'] = moment(json['created_at']).fromNow();
          var labels = populateBreakoutListLabels(json);
          populateLabelsForFilter(json, labelsForFilter);

          html += "\
          <tr>\
            <td>\
              <h4><strong><a href='" + json['html_url'] + "' target='_blank'>" + json['title'] + "</a></strong> " + labels + "</h4>\
              <p>Started " + json['opened-on'] + " by <a href='" + json['user']['html_url'] + "' target='_blank'>" + json['user']['login'] + "</a></p>\
            </td>\
          </tr>\
          ";
        });
        populateFilterMenu(labelsForFilter);
        $("#working-groups").html(html);
    });
}

function populateBreakoutListLabels(apiResponseData) {
    var labels = '';
    $.each(apiResponseData['labels'], function (i, label) {
        labels += "<span class='label label-info' style='background-color:#" + label['color'] + "'>" + label['name'] + "</span> ";
    });
    return labels;
}

function populateLabelsForFilter(apiResponseData, labelsForFilter) {
    $.each(apiResponseData['labels'], function (i, label) {
        var name = label['name'];
        if (labelsForFilter.indexOf(name) === -1) {
            labelsForFilter.push(name);
        }
    });
}

function populateFilterMenu(labelsForFilter) {
    $.each(labelsForFilter, function(i, labelName) {
        $('.selectpicker').append('<option>'+labelName+'</option>');
    });
}