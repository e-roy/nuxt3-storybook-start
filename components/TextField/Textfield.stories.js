import Textfield from "./Textfield.vue";

export default {
  title: "Elements/Textfield",
  component: Textfield,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Textfield },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Textfield v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "label",
  type: "text",
  name: "textfield",
  placeholder: "placeholder",
  value: "",
};
