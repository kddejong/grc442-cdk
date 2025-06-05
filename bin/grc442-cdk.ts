#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Grc442CdkStack } from '../lib/grc442-cdk-stack';

const app = new cdk.App();

new Grc442CdkStack(app, 'Grc442CdkStack', {});

