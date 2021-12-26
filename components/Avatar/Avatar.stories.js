import Avatar from "./Avatar.vue";

export default {
  title: "Elements/Avatar",
  component: Avatar,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Avatar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  seed: "randomString",
  color: "#41B883",
  bgcolor: "#35495E",
  size: 8,
  scale: 4,
  spotColor: "#000",
};

export const WithAddressAndSize = Template.bind({});
WithAddressAndSize.args = {
  seed: "0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5",
  size: 12,
};
