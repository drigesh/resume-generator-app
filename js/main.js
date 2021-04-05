document.querySelector('#page').contentEditable = true;

defaultTemplateVars = [ "fontDroid" , "caseNormal" , "titleRuled" , "ruleAbove" , "imageShow" , "rollShow" , "course1" , "tableShow" , "edyearFirst" , "experience1" , "projects1" ]

let temp=false;
$('#college-btn').click(function(){
	temp=!temp;
	var $window = $(window);
	var windowsize = $window.width();

		if(temp){
			$('.hidden-div').css({'display': 'inline'});
			if(windowsize<576){
				$('#left').css({'overflow':'scroll'})
			}
			else{
				$('#left').css({'overflow':'visible'})
			}
			
			$('body').css({'z-index': '-1'});
			$('#right').css({'z-index': '-1'});
			if($('#customTemplateBtn').hasClass('btn-warning')){
				$('.hideable').hide();
			}
		}
		else{
			// $(window).scrollTo(-20, 0);
			$('.hidden-div').css({'display': 'none'});
			if(windowsize>=576){
				$('#left').css({'overflow-x':'hidden'})
			}
			// $('#left').css({'overflow':'hidden'})
			$('body').css({'z-index': '0'});
			$('#right').css({'z-index': '0'});
			$('.hideable').show();
		}
});

function changeLogo(logo){
	$('#image-box img').attr('src','logo/'+logo+'.png');
	$('#college-btn').click();
	$('#contentCollege span').text(logo);
	$('#email-char').text(logo.substr(0,1).toLowerCase());
	$('.table-col').text(logo);

}





// $('#bombay').click(function(){
	// $('#bombay img').attr('src', 'logo/delhi.png');
	// $('#image-box img').attr('src','logo/bombay.png');
// });

// $('#bombay').hover(function(){
// 	$('#college-btn').click();
// 	$('#page-logo').attr('src','logo/bombay.png');
// });

// function meclicked(){
// 	$('#college-btn').css({'color': 'red'});
// }












$('#instructions').hover(()=>{
	$('.infohide').show(300);
},()=>{
	$('.infohide').hide(300);
})

$('#download').hover(()=>{
	$('.printhide').show(300);
},()=>{
	$('.printhide').hide(300);
})

$('#decrease').hover(()=>{
	$('.dechide').show(300);
},()=>{
	$('.dechide').hide(300);
})

$('#increase').hover(()=>{
	$('.inchide').show(300);
},()=>{
	$('.inchide').hide(300);
})
$('#insert').hover(()=>{
	$('.inserthide').show(300);
},()=>{
	$('.inserthide').hide(300);
})
$('#emailus').hover(()=>{
	$('.emailushide').show(300);
},()=>{
	$('.emailushide').hide(300);
})

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
		// console.log("toggleValue "+toggleValue);

			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		// console.log("toggleValue "+toggleValue);
		changeTemplate(toggleType,toggleValue);
	}
});

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function template(value)
{
	if(value=='default')
	{
		
		$('#defaultTemplateBtn').removeClass('btn-outline-warning text-warning').addClass('btn-warning text-dark');
		$('#customTemplateBtn').removeClass('btn-warning text-dark').addClass('btn-outline-warning text-warning');
		$('#customTemplateOptions').hide();
		for(i=0;i<defaultTemplateVars.length;i++)
			$('#'+defaultTemplateVars[i]).click();
	}
	else
	{
		$('#customTemplateBtn').removeClass('btn-outline-warning text-warning').addClass('btn-warning text-dark');
		$('#defaultTemplateBtn').removeClass('btn-warning text-dark').addClass('btn-outline-warning text-warning');
		$('#customTemplateOptions').show();
	}
}

function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		case 'minor':
			if(toggleValue=='minorShow')
			{
				$('#contentMinor').show();
				$('#image_box').css('margin-top','35px');
			}
			else
			{
				$('#contentMinor').hide();
				$('#image_box').css('margin-top','25px');
			}
			break;
		case 'contact':
			if(toggleValue=='contact3')
			{
				$('#contactLink1').hide();
				$('#contactLink2').hide();
			}
			else if(toggleValue=='contact4')
			{
				$('#contactLink1').show();
				$('#contactLink2').hide();
			}
			else
			{
				$('#contactLink1').show();
				$('#contactLink2').show();
			}
			break;
		case 'margin':
			if(toggleValue=='margin1')
				$('#page').css('padding','0.2cm 1cm 1cm 1cm');
			else if(toggleValue=='margin2')
				$('#page').css('padding','0.2cm 1.1cm 1cm 1.1cm');
			else if(toggleValue=='margin3')
				$('#page').css('padding','0.2cm 1.2cm 1cm 1.2cm');
			else if(toggleValue=='margin4')
				$('#page').css('padding','0.2cm 1.3cm 1cm 1.3cm');
			else if(toggleValue=='margin5')
				$('#page').css('padding','0.2cm 1.4cm 1cm 1.4cm');
			else if(toggleValue=='margin6')
				$('#page').css('padding','0.2cm 1.5cm 1cm 1.5cm');
			break;
		case 'line':
			if(toggleValue==='line1')
				{
				// $('#page').css("background-color","red");
				console.log("toggleValue "+toggleValue);
				$('#printable').css("line-height", "1.1em");}
			else if(toggleValue=='line2')
				$('#printable').css("line-height", "1.2em");
			else if(toggleValue=='line3')
				$('#printable').css("line-height", "1.3em");
			else if(toggleValue=='line4')
				$('#printable').css("line-height", "1.4em");
			else if(toggleValue=='line5')
				$('#printable').css("line-height", "1.5em");
			else if(toggleValue=='line6')
				$('#printable').css("line-height", "1.6em");
			break;
		case 'column':
			if(toggleValue=='column1')
			{
				// $('#page').css("background-color","red");
				$('.table tbody tr td:nth-child(1)').toggleClass('text-center');}
			else if(toggleValue=='column2')
				$('.table tbody tr td:nth-child(2)').toggleClass('text-center');
			else if(toggleValue=='column3')
				$('.table tbody tr td:nth-child(3)').toggleClass('text-center');
			else if(toggleValue=='column4')
				$('.table tbody tr td:nth-child(4)').toggleClass('text-center');
			break;

		case 'program':
			if(toggleValue=='btech'){
				$('#mtech-row').hide();
				$('#phd-row').hide();
				// $('#btech-row').text('2013 - present');
			}
			else if(toggleValue=='mtech'){
				$('#mtech-row').show();
				$('#phd-row').hide();
				// $('#mtech-row').text('201 - present');
				// $('#btech-row').text('2013 - 2017');

			}
			else if(toggleValue=='phd'){
				$('#mtech-row').show();
				$('#phd-row').show();
				// $('#phd-row').text('2013 - 2017');
				// $('#mtech-row').text('2013 - present');
				// $('#btech-row').text('2013 - 2017');
			}
			break;

		case 'font':
			if(toggleValue=='fontVerdana')
				$('#page').removeClass('droid').removeClass('roboto').removeClass('montserrat').addClass('verdana');
			else if(toggleValue=='fontMontserrat')
				$('#page').removeClass('verdana').removeClass('droid').removeClass('roboto').addClass('montserrat');
			else if(toggleValue=='fontRoboto')
				$('#page').removeClass('montserrat').removeClass('verdana').removeClass('droid').addClass('roboto');
			else if(toggleValue=='fontDroid')
				$('#page').removeClass('roboto').removeClass('montserrat').removeClass('verdana').addClass('droid');
			break;
		case 'case':
			if(toggleValue=='caseNormal')
				$('.section-title').removeClass('uppercase');
			else
				$('.section-title').addClass('uppercase');
			break;
		case 'title':
			if(toggleValue=='titleRuled')
			{
				$('.section-title').removeClass('shaded');
				$('.section-title').addClass('ruled');
			}
			else
			{
				$('.section-title').removeClass('ruled');
				$('.section-title').addClass('shaded');
			}
			break;
		case 'rule':
			if(toggleValue=='ruleAbove')
			{
				$('.section-title').removeClass('rule-below');
				$('.section-title').addClass('rule-above');
			}
			else
			{
				$('.section-title').removeClass('rule-above');
				$('.section-title').addClass('rule-below');
			}
			break;

		case 'image':
			if(toggleValue=='imageShow')
			{
				$('#image-box').show();
				$('#info').css('margin-left','0px');
			}
			else
			{
				$('#image-box').hide();
				$('#info').css('margin-left','20px');
			}
			break;
		case 'roll':
			if(toggleValue=='rollShow')
			{
				$('#contentRoll').show();
				$('#info').css('margin-top','0px');
			}
			else
			{
				$('#contentRoll').hide();
				$('#info').css('margin-top','10px');
			}
			break;
		case 'course':
			if(toggleValue=='course1')
			{
				$('#contentBranch').hide();
				$('#contentCourse').text('B.Tech - '+$('#contentBranch').text());
			}
			else
			{
				$('#contentBranch').show();
				$('#contentCourse').text('B.Tech undergraduate');
			}
			break;
		case 'table':
			if(toggleValue=='tableShow')
			{
				$('#educationTable').removeClass('borderless');
				$('#educationTable').addClass('customBordered');
			}
			else
			{
				$('#educationTable').removeClass('customBordered');
				$('#educationTable').addClass('borderless');
			}
			break;
		case 'edyear':
			if(toggleValue=='edyearFirst')
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(0).before($(this).find("td").eq(3));
				});
				var temp = document.getElementById('column4').className;
				document.getElementById('column4').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column1').className;
				document.getElementById('column1').className = temp;
			}
			else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}
			break;
		case 'projects':
			if(toggleValue=='projects1')
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
				$("#sectionProjects .time").addClass('right').removeClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").show();
			}
			else
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','block');
				$("#sectionProjects .time").removeClass('right').addClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").hide();
			}
			break;
	}
}

function insertList()
{
	node = getSelectionContainerElement();
	var ul = document.createElement("ul");
	ul.className = 'decimal';
	ul.style.marginLeft = '0px';
	ul.innerHTML = "<li>Sub-point 1 : Description</li><li>Sub-point 2 : Description</li>";
	insertAfter(node,ul);
}

function decreaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))-5;
}

function increaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))+5;
}

function changeListStyle(value)
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.className = value;

}


function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			// Old WebKit selection object has no getRangeAt, so
			// create a range from other selection properties
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			// Handle the case when the selection was selected backwards (from the end to the start in the document)
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			// Check if the container is a text node and return its parent if so
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode,newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}