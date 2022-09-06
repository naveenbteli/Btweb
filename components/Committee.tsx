import { Accordion, Avatar, Image } from "@mantine/core";
import CustomAvatar from './CustomAvatar';

export default function Committee() {
  return (
    <>
      <aside className="bg-[#0D1117]">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <h1 className="text-6xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
            Committee
          </h1>
          <Accordion defaultValue="customization" variant="separated">
            <Accordion.Item value="customization">
              <Accordion.Control>Chief Patron</Accordion.Control>
              <Accordion.Panel>
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="flexibility" >
              <Accordion.Control>Patron</Accordion.Control>
              <Accordion.Panel>
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="focus-ring">
              <Accordion.Control>Advisory Committee</Accordion.Control>
              <Accordion.Panel>
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                  <CustomAvatar />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </aside>
    </>
  );
}
