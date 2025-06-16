#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Grc442CdkStack } from '../lib/grc442-cdk-stack';
import { MyCompanyChecker } from '../lib/aspects';

const app = new cdk.App();

cdk.Aspects.of(app).add(new MyCompanyChecker());

new Grc442CdkStack(app, 'Grc442CdkStack', {});
