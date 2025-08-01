/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type Int64 = string | number;

/** 接入agw的公参（ClientIp）引入的通用结构体，copy from  */
export interface UnifyArgs {
  platform_id?: number;
  is_ios?: boolean;
  is_android?: boolean;
  access_type?: number;
  resolution_width?: number;
  resolution_height?: number;
  unify_version_code?: Int64;
  unify_version_code_611?: Int64;
  product_id?: number;
  region?: Int64;
  app_cn_name?: string;
  app_name?: string;
  /** 来自query里面的"aid"或者"app_id" */
  app_id?: number;
  /** 来自cookie里面的"install_id"或者query的"iid" */
  install_id?: Int64;
  /** 来自query的"device_id", 或者是根据install_id从device_info服务获取的device_id */
  device_id?: Int64;
  /** 最接近用户的ip, 获取逻辑参考:  */
  client_ip?: string;
}
/* eslint-enable */
