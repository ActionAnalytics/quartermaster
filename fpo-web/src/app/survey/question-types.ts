function initYesNo(Survey) {
  const widget = {
    name: 'yesno',
    title: 'Yes/No',
    iconName: 'icon-radiogroup',
    isDefaultRender: true,
    widgetIsLoaded: function() {
      return true;
    },
    isFit: function(question) {
      return question.getType() === 'yesno';
    },
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass('yesno', [], null, 'empty');
    },
    htmlTemplate: '<div></div>',
    makeButton: function(question, opt) {
      const chk = document.createElement('input');
      chk.type = 'radio';
      chk.name = question.name + '_' + question.id;
      chk.value = opt.value;
      chk.checked = (question.value === opt.value);
      chk.onclick = function() {
        if ((<HTMLInputElement>this).checked) {
          question.value = opt.value;
        }
      }
      opt.input = chk;
      const outer = document.createElement('label');
      outer.className = 'survey-yesno';
      outer.appendChild(chk);
      const div = document.createElement('span');
      div.className = 'survey-yesno-button';
      div.appendChild(document.createTextNode(opt.label));
      div.tabIndex = 0;
      div.setAttribute('role', 'button');
      if (opt.value === 'y') {
        div.id = question.inputId;
      } // allow auto focus
      div.onkeypress = function(evt) {
        if (evt.keyCode == 32) {
          chk.checked = true;
          question.value = opt.value;
          evt.preventDefault();
        }
      }
      outer.appendChild(div);
      opt.button = outer;
      return outer;
    },
    afterRender: function(question, el) {
      while (el.childNodes.length) {
        el.removeChild(el.childNodes[0]);
      }

      const choices = [
        {label: 'Yes', value: 'y', button: null, input: null},
        {label: 'No', value: 'n', button: null, input: null}
      ];
      for (const opt of choices) {
        const btn = this.makeButton(question, opt);
        el.appendChild(opt.button);
      }
      question.valueChangedCallback = function() {
        for (const opt of choices) {
          if (opt.value === question.value) { opt.input.checked = true; }
        }
      };
      // This probably shouldn't be necessary, but the question is sometimes rendered with no value
      if (question.value === undefined) {
        setTimeout(question.valueChangedCallback, 50);
      }
    },
    willUnmount: function(question, el) {}
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, 'type');
}

export function addQuestionTypes(Survey) {
  initYesNo(Survey);
}

