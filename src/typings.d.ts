/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;
interface JQuery {
  datepicker:any;
  timepicker:any;
  datetimepicker:any;
}
