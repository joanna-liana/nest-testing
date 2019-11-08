import { Module } from '@nestjs/common';
import { SampleDependencyService } from './sample-dependency.service';

@Module({
  imports: [SampleDependencyService],
  exports: [SampleDependencyService],
})
export class SampleDependencyModule {}
