// Vendors
import React from 'react';
// Components
import { ParagraphComponent } from 'components/atoms/paragraph/paragraph.component';
import { ScrollareaComponent } from 'components/atoms/scrollarea/scrollarea.component';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

const ScrollareaPage = (): React.ReactElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ height: 200 }}>
        <ScrollareaComponent>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo. Amet
            justo donec enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non quam
            lacus suspendisse faucibus. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Elementum pulvinar etiam non quam. Adipiscing commodo elit at imperdiet dui
            accumsan sit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet massa vitae tortor
            condimentum lacinia quis. Duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi. Mi tempus imperdiet nulla malesuada pellentesque elit eget. In hac habitasse
            platea dictumst quisque sagittis. Faucibus in ornare quam viverra orci. Quis vel eros
            donec ac odio tempor orci dapibus ultrices. Elit sed vulputate mi sit amet. Sed
            adipiscing diam donec adipiscing tristique. Orci porta non pulvinar neque laoreet. Odio
            facilisis mauris sit amet. Consequat ac felis donec et odio pellentesque. Non sodales
            neque sodales ut etiam sit amet. Neque laoreet suspendisse interdum consectetur. Eu
            augue ut lectus arcu bibendum at. Quam pellentesque nec nam aliquam sem. Mauris rhoncus
            aenean vel elit scelerisque mauris. Nam libero justo laoreet sit amet cursus sit amet.
            Feugiat in fermentum posuere urna nec tincidunt. Consectetur lorem donec massa sapien.
            Turpis egestas integer eget aliquet nibh praesent tristique. Mattis aliquam faucibus
            purus in massa tempor nec feugiat. Fermentum posuere urna nec tincidunt praesent semper.
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nunc consequat
            interdum varius sit amet mattis vulputate enim nulla. Ultricies integer quis auctor elit
            sed vulputate mi sit amet. Amet facilisis magna etiam tempor orci eu lobortis elementum.
            Nec ullamcorper sit amet risus nullam eget felis eget. Scelerisque fermentum dui
            faucibus in. Nunc aliquet bibendum enim facilisis gravida neque. Nunc lobortis mattis
            aliquam faucibus purus in massa tempor. Vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus aenean. Augue interdum velit euismod in. Eu sem integer vitae justo eget.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum. Felis eget velit aliquet
            sagittis id consectetur. Enim nunc faucibus a pellentesque sit. Auctor neque vitae
            tempus quam pellentesque nec nam. Ultrices neque ornare aenean euismod elementum nisi.
            Adipiscing elit ut aliquam purus sit. Ut aliquam purus sit amet luctus venenatis lectus
            magna. Tellus at urna condimentum mattis pellentesque id. Venenatis lectus magna
            fringilla urna porttitor rhoncus dolor purus. Ac tincidunt vitae semper quis lectus
            nulla at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Tortor pretium
            viverra suspendisse potenti nullam. Bibendum enim facilisis gravida neque convallis a
            cras semper. Eu augue ut lectus arcu bibendum. Velit aliquet sagittis id consectetur
            purus ut faucibus. Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Eget arcu dictum varius duis at consectetur lorem donec massa. Congue nisi vitae
            suscipit tellus mauris a diam maecenas sed. In nisl nisi scelerisque eu. Volutpat
            consequat mauris nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
            Porttitor eget dolor morbi non arcu risus quis varius. Ornare arcu dui vivamus arcu
            felis bibendum. Ipsum consequat nisl vel pretium lectus quam id. Sagittis eu volutpat
            odio facilisis mauris. Ullamcorper malesuada proin libero nunc consequat interdum varius
            sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices. Commodo quis
            imperdiet massa tincidunt. Eget dolor morbi non arcu. Luctus accumsan tortor posuere ac
            ut. Sit amet mattis vulputate enim nulla. Ut pharetra sit amet aliquam id diam maecenas.
            Pharetra convallis posuere morbi leo urna molestie at. Sollicitudin ac orci phasellus
            egestas tellus rutrum. Donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna.
          </ParagraphComponent>
        </ScrollareaComponent>
      </div>
      <div style={{ height: 200 }}>
        <ScrollareaComponent
          {...{
            borderRadius: ScrollareaComponentBorderRadiusEnum.NONE,
            gap: ScrollareaComponentGapEnum.MEDIUM,
            size: ScrollareaComponentSizeEnum.LARGE,
          }}>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo. Amet
            justo donec enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non quam
            lacus suspendisse faucibus. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Elementum pulvinar etiam non quam. Adipiscing commodo elit at imperdiet dui
            accumsan sit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet massa vitae tortor
            condimentum lacinia quis. Duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi. Mi tempus imperdiet nulla malesuada pellentesque elit eget. In hac habitasse
            platea dictumst quisque sagittis. Faucibus in ornare quam viverra orci. Quis vel eros
            donec ac odio tempor orci dapibus ultrices. Elit sed vulputate mi sit amet. Sed
            adipiscing diam donec adipiscing tristique. Orci porta non pulvinar neque laoreet. Odio
            facilisis mauris sit amet. Consequat ac felis donec et odio pellentesque. Non sodales
            neque sodales ut etiam sit amet. Neque laoreet suspendisse interdum consectetur. Eu
            augue ut lectus arcu bibendum at. Quam pellentesque nec nam aliquam sem. Mauris rhoncus
            aenean vel elit scelerisque mauris. Nam libero justo laoreet sit amet cursus sit amet.
            Feugiat in fermentum posuere urna nec tincidunt. Consectetur lorem donec massa sapien.
            Turpis egestas integer eget aliquet nibh praesent tristique. Mattis aliquam faucibus
            purus in massa tempor nec feugiat. Fermentum posuere urna nec tincidunt praesent semper.
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nunc consequat
            interdum varius sit amet mattis vulputate enim nulla. Ultricies integer quis auctor elit
            sed vulputate mi sit amet. Amet facilisis magna etiam tempor orci eu lobortis elementum.
            Nec ullamcorper sit amet risus nullam eget felis eget. Scelerisque fermentum dui
            faucibus in. Nunc aliquet bibendum enim facilisis gravida neque. Nunc lobortis mattis
            aliquam faucibus purus in massa tempor. Vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus aenean. Augue interdum velit euismod in. Eu sem integer vitae justo eget.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum. Felis eget velit aliquet
            sagittis id consectetur. Enim nunc faucibus a pellentesque sit. Auctor neque vitae
            tempus quam pellentesque nec nam. Ultrices neque ornare aenean euismod elementum nisi.
            Adipiscing elit ut aliquam purus sit. Ut aliquam purus sit amet luctus venenatis lectus
            magna. Tellus at urna condimentum mattis pellentesque id. Venenatis lectus magna
            fringilla urna porttitor rhoncus dolor purus. Ac tincidunt vitae semper quis lectus
            nulla at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Tortor pretium
            viverra suspendisse potenti nullam. Bibendum enim facilisis gravida neque convallis a
            cras semper. Eu augue ut lectus arcu bibendum. Velit aliquet sagittis id consectetur
            purus ut faucibus. Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Eget arcu dictum varius duis at consectetur lorem donec massa. Congue nisi vitae
            suscipit tellus mauris a diam maecenas sed. In nisl nisi scelerisque eu. Volutpat
            consequat mauris nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
            Porttitor eget dolor morbi non arcu risus quis varius. Ornare arcu dui vivamus arcu
            felis bibendum. Ipsum consequat nisl vel pretium lectus quam id. Sagittis eu volutpat
            odio facilisis mauris. Ullamcorper malesuada proin libero nunc consequat interdum varius
            sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices. Commodo quis
            imperdiet massa tincidunt. Eget dolor morbi non arcu. Luctus accumsan tortor posuere ac
            ut. Sit amet mattis vulputate enim nulla. Ut pharetra sit amet aliquam id diam maecenas.
            Pharetra convallis posuere morbi leo urna molestie at. Sollicitudin ac orci phasellus
            egestas tellus rutrum. Donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna.
          </ParagraphComponent>
        </ScrollareaComponent>
      </div>
      <div style={{ height: 200 }}>
        <ScrollareaComponent
          {...{
            variant: ScrollareaComponentVariantEnum.HIDDEN,
          }}>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo. Amet
            justo donec enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non quam
            lacus suspendisse faucibus. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Elementum pulvinar etiam non quam. Adipiscing commodo elit at imperdiet dui
            accumsan sit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet massa vitae tortor
            condimentum lacinia quis. Duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi. Mi tempus imperdiet nulla malesuada pellentesque elit eget. In hac habitasse
            platea dictumst quisque sagittis. Faucibus in ornare quam viverra orci. Quis vel eros
            donec ac odio tempor orci dapibus ultrices. Elit sed vulputate mi sit amet. Sed
            adipiscing diam donec adipiscing tristique. Orci porta non pulvinar neque laoreet. Odio
            facilisis mauris sit amet. Consequat ac felis donec et odio pellentesque. Non sodales
            neque sodales ut etiam sit amet. Neque laoreet suspendisse interdum consectetur. Eu
            augue ut lectus arcu bibendum at. Quam pellentesque nec nam aliquam sem. Mauris rhoncus
            aenean vel elit scelerisque mauris. Nam libero justo laoreet sit amet cursus sit amet.
            Feugiat in fermentum posuere urna nec tincidunt. Consectetur lorem donec massa sapien.
            Turpis egestas integer eget aliquet nibh praesent tristique. Mattis aliquam faucibus
            purus in massa tempor nec feugiat. Fermentum posuere urna nec tincidunt praesent semper.
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nunc consequat
            interdum varius sit amet mattis vulputate enim nulla. Ultricies integer quis auctor elit
            sed vulputate mi sit amet. Amet facilisis magna etiam tempor orci eu lobortis elementum.
            Nec ullamcorper sit amet risus nullam eget felis eget. Scelerisque fermentum dui
            faucibus in. Nunc aliquet bibendum enim facilisis gravida neque. Nunc lobortis mattis
            aliquam faucibus purus in massa tempor. Vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus aenean. Augue interdum velit euismod in. Eu sem integer vitae justo eget.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum. Felis eget velit aliquet
            sagittis id consectetur. Enim nunc faucibus a pellentesque sit. Auctor neque vitae
            tempus quam pellentesque nec nam. Ultrices neque ornare aenean euismod elementum nisi.
            Adipiscing elit ut aliquam purus sit. Ut aliquam purus sit amet luctus venenatis lectus
            magna. Tellus at urna condimentum mattis pellentesque id. Venenatis lectus magna
            fringilla urna porttitor rhoncus dolor purus. Ac tincidunt vitae semper quis lectus
            nulla at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Tortor pretium
            viverra suspendisse potenti nullam. Bibendum enim facilisis gravida neque convallis a
            cras semper. Eu augue ut lectus arcu bibendum. Velit aliquet sagittis id consectetur
            purus ut faucibus. Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Eget arcu dictum varius duis at consectetur lorem donec massa. Congue nisi vitae
            suscipit tellus mauris a diam maecenas sed. In nisl nisi scelerisque eu. Volutpat
            consequat mauris nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
            Porttitor eget dolor morbi non arcu risus quis varius. Ornare arcu dui vivamus arcu
            felis bibendum. Ipsum consequat nisl vel pretium lectus quam id. Sagittis eu volutpat
            odio facilisis mauris. Ullamcorper malesuada proin libero nunc consequat interdum varius
            sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices. Commodo quis
            imperdiet massa tincidunt. Eget dolor morbi non arcu. Luctus accumsan tortor posuere ac
            ut. Sit amet mattis vulputate enim nulla. Ut pharetra sit amet aliquam id diam maecenas.
            Pharetra convallis posuere morbi leo urna molestie at. Sollicitudin ac orci phasellus
            egestas tellus rutrum. Donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna.
          </ParagraphComponent>
        </ScrollareaComponent>
      </div>
      <div style={{ height: 200 }}>
        <ScrollareaComponent
          {...{
            variant: ScrollareaComponentVariantEnum.HOVER,
          }}>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo. Amet
            justo donec enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non quam
            lacus suspendisse faucibus. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Elementum pulvinar etiam non quam. Adipiscing commodo elit at imperdiet dui
            accumsan sit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet massa vitae tortor
            condimentum lacinia quis. Duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi. Mi tempus imperdiet nulla malesuada pellentesque elit eget. In hac habitasse
            platea dictumst quisque sagittis. Faucibus in ornare quam viverra orci. Quis vel eros
            donec ac odio tempor orci dapibus ultrices. Elit sed vulputate mi sit amet. Sed
            adipiscing diam donec adipiscing tristique. Orci porta non pulvinar neque laoreet. Odio
            facilisis mauris sit amet. Consequat ac felis donec et odio pellentesque. Non sodales
            neque sodales ut etiam sit amet. Neque laoreet suspendisse interdum consectetur. Eu
            augue ut lectus arcu bibendum at. Quam pellentesque nec nam aliquam sem. Mauris rhoncus
            aenean vel elit scelerisque mauris. Nam libero justo laoreet sit amet cursus sit amet.
            Feugiat in fermentum posuere urna nec tincidunt. Consectetur lorem donec massa sapien.
            Turpis egestas integer eget aliquet nibh praesent tristique. Mattis aliquam faucibus
            purus in massa tempor nec feugiat. Fermentum posuere urna nec tincidunt praesent semper.
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nunc consequat
            interdum varius sit amet mattis vulputate enim nulla. Ultricies integer quis auctor elit
            sed vulputate mi sit amet. Amet facilisis magna etiam tempor orci eu lobortis elementum.
            Nec ullamcorper sit amet risus nullam eget felis eget. Scelerisque fermentum dui
            faucibus in. Nunc aliquet bibendum enim facilisis gravida neque. Nunc lobortis mattis
            aliquam faucibus purus in massa tempor. Vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus aenean. Augue interdum velit euismod in. Eu sem integer vitae justo eget.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum. Felis eget velit aliquet
            sagittis id consectetur. Enim nunc faucibus a pellentesque sit. Auctor neque vitae
            tempus quam pellentesque nec nam. Ultrices neque ornare aenean euismod elementum nisi.
            Adipiscing elit ut aliquam purus sit. Ut aliquam purus sit amet luctus venenatis lectus
            magna. Tellus at urna condimentum mattis pellentesque id. Venenatis lectus magna
            fringilla urna porttitor rhoncus dolor purus. Ac tincidunt vitae semper quis lectus
            nulla at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Tortor pretium
            viverra suspendisse potenti nullam. Bibendum enim facilisis gravida neque convallis a
            cras semper. Eu augue ut lectus arcu bibendum. Velit aliquet sagittis id consectetur
            purus ut faucibus. Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Eget arcu dictum varius duis at consectetur lorem donec massa. Congue nisi vitae
            suscipit tellus mauris a diam maecenas sed. In nisl nisi scelerisque eu. Volutpat
            consequat mauris nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
            Porttitor eget dolor morbi non arcu risus quis varius. Ornare arcu dui vivamus arcu
            felis bibendum. Ipsum consequat nisl vel pretium lectus quam id. Sagittis eu volutpat
            odio facilisis mauris. Ullamcorper malesuada proin libero nunc consequat interdum varius
            sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices. Commodo quis
            imperdiet massa tincidunt. Eget dolor morbi non arcu. Luctus accumsan tortor posuere ac
            ut. Sit amet mattis vulputate enim nulla. Ut pharetra sit amet aliquam id diam maecenas.
            Pharetra convallis posuere morbi leo urna molestie at. Sollicitudin ac orci phasellus
            egestas tellus rutrum. Donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna.
          </ParagraphComponent>
        </ScrollareaComponent>
      </div>
    </div>
  );
};

export { ScrollareaPage };
