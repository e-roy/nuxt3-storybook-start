import Address from "./Address.vue";

export default {
  title: "Elements/Address",
  component: Address,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Address },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Address v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  address: "testaddress.eth",
};

export const DefaultShortenedWithENS = Template.bind({});
DefaultShortenedWithENS.args = {
  shortened: true,
  address: "testaddress.eth",
};

export const DefaultShortenedWithHexAddress = Template.bind({});
DefaultShortenedWithHexAddress.args = {
  shortened: true,
  address: "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b",
};
