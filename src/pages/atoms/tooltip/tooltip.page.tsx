// Vendors
import React from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { TooltipComponent } from 'components/atoms/tooltip/tooltip.component';
// Enums
import { ButtonComponentShapeEnum } from 'components/atoms/button/enums/button.component.enums';
import { TooltipComponentPlacementEnum } from 'components/atoms/tooltip/enums/tooltip.component.enums';
// Icons
import { Trash2 } from 'lucide-react';

const TooltipPage = (): React.ReactElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <TooltipComponent {...{ title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent {...{ showDelay: 600, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent {...{ hideDelay: 600, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent {...{ hideDelay: 600, showDelay: 600, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        <TooltipComponent
          {...{ placement: TooltipComponentPlacementEnum.BOTTOM, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            placement: TooltipComponentPlacementEnum.BOTTOM,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.BOTTOM,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.BOTTOM,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        <TooltipComponent
          {...{ placement: TooltipComponentPlacementEnum.LEFT, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            placement: TooltipComponentPlacementEnum.LEFT,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.LEFT,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.LEFT,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
      </div>
      
      <div style={{ display: 'flex', gap: 24 }}>
        <TooltipComponent
          {...{ placement: TooltipComponentPlacementEnum.RIGHT, title: 'Lorem ipsum' }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            placement: TooltipComponentPlacementEnum.RIGHT,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.RIGHT,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          {...{
            hideDelay: 600,
            placement: TooltipComponentPlacementEnum.RIGHT,
            showDelay: 600,
            title: 'Lorem ipsum',
          }}>
          <ButtonComponent {...{ shape: ButtonComponentShapeEnum.CIRCLE }}>
            <Trash2 />
          </ButtonComponent>
        </TooltipComponent>
      </div>
    </div>
  );
};

export { TooltipPage };
