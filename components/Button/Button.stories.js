import Button from "./Button.vue";

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {},
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: {
  //     options: ["small", "medium", "large"],
  //     control: "select",
  //   },
  // },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  type: "secondary",
};
