import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator<never, ExecutionContext>(
  (_data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
