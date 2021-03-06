<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="au.org.ala.volunteer.FieldType; au.org.ala.volunteer.FieldCategory; au.org.ala.volunteer.DarwinCoreField" %>

<form>
    <div class="form-group">
        <label class="control-label" for="fieldName"><g:message code="template.addTemplateFieldFragment.field"/></label>
        <g:select name="fieldName" class="form-control" from="${DarwinCoreField.values().sort({ it.name() })}"/>
    </div>

    <div class="form-group">
        <label class="control-label" for="fieldTypeClassifier">Classifier:<cl:helpText><g:message code="field.classifier.help" default="Distinguishes multiple fields with the same type but only works on select templates"/></cl:helpText></label>
        <g:textField class="form-control" name="fieldTypeClassifier" value=""/>
    </div>

    <div class="form-group">
        <label class="control-label" for="label"><g:message code="template.addTemplateFieldFragment.label"/></label>
        <g:textField class="form-control" name="label" value=""/>
    </div>

    <div class="form-group">
        <label class="control-label" for="category"><g:message code="template.addTemplateFieldFragment.category"/></label>
        <g:select class="form-control" name="category" from="${FieldCategory?.values()}" value="${FieldCategory.none}"/>
    </div>

    <div class="form-group">
        <label class="control-label" for="type"><g:message code="template.addTemplateFieldFragment.type"/></label>
        <g:select class="form-control" name="type" from="${FieldType?.values()}" keys="${FieldType?.values()*.name()}"
                  value="${FieldType.text}"/>
    </div>

    <div class="modal-footer">
        <button id="btnCancelAddField" class="btn btn-default"><g:message code="default.cancel"/></button>
        <button id="btnSaveField" class="btn btn-primary"><g:message code="template.addTemplateFieldFragment.add_field"/></button>
    </div>

</form>

<script>
    $('#btnSaveField').click(function (e) {
        e.preventDefault();
        var fieldType = encodeURIComponent($("#fieldName").val());
        if (fieldType) {
            var url = "${createLink(controller:'template', action:'addField', id:templateInstance.id)}?fieldType=" + fieldType;

            var classifier = $('#fieldTypeClassifier').val();
            if (classifier) {
                url += "&fieldTypeClassifier=" + encodeURIComponent(classifier);
            }

            var label = $("#label").val();
            if (label) {
                url += "&label=" + encodeURIComponent(label);
            }
            var category = $("#category").val();
            if (category) {
                url += "&category=" + encodeURIComponent(category);
            }
            var type = $("#type").val();
            if (type) {
                url += "&type=" + encodeURIComponent(type);
            }
            console.log("Forwarding to ... "+url);
            window.location = url;
        }

    });

    $("#btnCancelAddField").click(function (e) {
        e.preventDefault();
        bvp.hideModal();
    });

</script>

