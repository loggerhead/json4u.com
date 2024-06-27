import * as React from "react";
import dynamic from "next/dynamic";
import { Container, ContainerContent, ContainerHeader } from "@/components/Container";
import Graph from "@/components/graph";
import { JsonTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@xyflow/react/dist/style.css";
import { Table2, Text, Waypoints } from "lucide-react";
import { useTranslations } from "next-intl";

const Editor = dynamic(() => import(/* webpackChunkName: "monaco-editor" */ "@/components/Editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const data = {
  extra: { fatal_item_ids: [], logid: "2024011109181548FF40C588C77911893A", now: 1704964697000 },
  log_pb: { impr_id: "2024011109181548FF40C588C77911893A" },
  "The promotion you created on 11/01/2024 has ended. See how your promotion performed.": [
    {
      group: 545,
      has_more: 1,
      max_time: 1704943494,
      min_time: 1655278200,
      notice_ids_before_pack: null,
      notice_list: [
        {
          create_time: 1704954391,
          frequency_configs: null,
          has_read: true,
          nid: 7322723111261028000,
          nid_str: "7322723111261028609",
          promote_notice: {
            ad_time: "2024-01-11 06:26:31",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704954391,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322723111261028609","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322723111261028000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774186071041&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774186071041&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954327,
          frequency_configs: null,
          has_read: true,
          nid: 7322722923600233000,
          nid_str: "7322722923600233218",
          promote_notice: {
            ad_time: "2024-01-11 06:25:27",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704954327,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722923600233218","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722923600233000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774186071041&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774186071041&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954277,
          frequency_configs: null,
          has_read: true,
          nid: 7322722701000820000,
          nid_str: "7322722701000819458",
          promote_notice: {
            ad_time: "2024-01-11 06:24:37",
            content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704954277,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722701000819458","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722701000820000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954265,
          frequency_configs: null,
          has_read: true,
          nid: 7322722666275341000,
          nid_str: "7322722666275340801",
          promote_notice: {
            ad_time: "2024-01-11 06:24:25",
            content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704954265,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722666275340801","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722666275341000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954249,
          frequency_configs: null,
          has_read: true,
          nid: 7322722598981845000,
          nid_str: "7322722598981845250",
          promote_notice: {
            ad_time: "2024-01-11 06:24:09",
            content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704954249,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722598981845250","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722598981845000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954224,
          frequency_configs: null,
          has_read: true,
          nid: 7322722427375502000,
          nid_str: "7322722427375501825",
          promote_notice: {
            ad_time: "2024-01-11 06:23:44",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704954224,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722427375501825","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722427375502000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954150,
          frequency_configs: null,
          has_read: true,
          nid: 7322721733730387000,
          nid_str: "7322721733730386689",
          promote_notice: {
            ad_time: "2024-01-11 06:22:30",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704954150,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721733730386689","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721733730387000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787774001549314&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954130,
          frequency_configs: null,
          has_read: true,
          nid: 7322722096026060000,
          nid_str: "7322722096026059522",
          promote_notice: {
            ad_time: "2024-01-11 06:22:10",
            content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704954130,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322722096026059522","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322722096026060000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954094,
          frequency_configs: null,
          has_read: true,
          nid: 7322721943927456000,
          nid_str: "7322721943927456002",
          promote_notice: {
            ad_time: "2024-01-11 06:21:34",
            content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704954094,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721943927456002","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721943927456000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954044,
          frequency_configs: null,
          has_read: true,
          nid: 7322721601257538000,
          nid_str: "7322721601257537794",
          promote_notice: {
            ad_time: "2024-01-11 06:20:44",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704954044,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721601257537794","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721601257538000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704954022,
          frequency_configs: null,
          has_read: true,
          nid: 7322721617921361000,
          nid_str: "7322721617921360386",
          promote_notice: {
            ad_time: "2024-01-11 06:20:22",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704954022,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721617921360386","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721617921361000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953971,
          frequency_configs: null,
          has_read: true,
          nid: 7322720957511468000,
          nid_str: "7322720957511467521",
          promote_notice: {
            ad_time: "2024-01-11 06:19:31",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704953971,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322720957511467521","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322720957511468000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953967,
          frequency_configs: null,
          has_read: true,
          nid: 7322721392238314000,
          nid_str: "7322721392238314241",
          promote_notice: {
            ad_time: "2024-01-11 06:19:27",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704953967,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721392238314241","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721392238314000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773809660930&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953945,
          frequency_configs: null,
          has_read: true,
          nid: 7322721269840183000,
          nid_str: "7322721269840183553",
          promote_notice: {
            ad_time: "2024-01-11 06:19:05",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704953945,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721269840183553","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721269840183000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773786226690&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953901,
          frequency_configs: null,
          has_read: true,
          nid: 7322721089791280000,
          nid_str: "7322721089791279874",
          promote_notice: {
            ad_time: "2024-01-11 06:18:21",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704953901,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721089791279874","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721089791280000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773740153922&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953887,
          frequency_configs: null,
          has_read: true,
          nid: 7322721043906249000,
          nid_str: "7322721043906248962",
          promote_notice: {
            ad_time: "2024-01-11 06:18:07",
            content:
              "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
            schema_url: "",
            title: "Promotion approved",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_327",
          template_notice: {
            create_time: 1704953887,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322721043906248962","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322721043906249000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content:
                "The promotion you created on 11/01/2024 was approved.  After your promotion ends, you can see how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion approved" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704953821,
          frequency_configs: null,
          has_read: true,
          nid: 7322720762975700000,
          nid_str: "7322720762975699457",
          promote_notice: {
            ad_time: "2024-01-11 06:17:01",
            content: "The promotion you created on 11/01/2024 is currently under review",
            schema_url: "",
            title: "Promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_316",
          template_notice: {
            create_time: 1704953821,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322720762975699457","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322720762975700000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 11/01/2024 is currently under review",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787773656665154&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704944073,
          frequency_configs: null,
          has_read: true,
          nid: 7322678624564920000,
          nid_str: "7322678624564920578",
          promote_notice: {
            ad_time: "2024-01-11 03:34:33",
            content: "The promotion you created on 10/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "Promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_315",
          template_notice: {
            create_time: 1704944073,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322678624564920578","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322678624564920000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The promotion you created on 10/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787672759213121&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "Promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787672759213121&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704943561,
          frequency_configs: null,
          has_read: true,
          nid: 7322676425911730000,
          nid_str: "7322676425911730433",
          promote_notice: {
            ad_time: "2024-01-11 03:26:01",
            content: "The LIVE promotion you created on 11/01/2024 has ended. See how your promotion performed.",
            schema_url: "",
            title: "LIVE promotion ended",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_496",
          template_notice: {
            create_time: 1704943561,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322676425911730433","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322676425911730000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The LIVE promotion you created on 11/01/2024 has ended. See how your promotion performed.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787762827526145&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "LIVE promotion ended" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787762827526145&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
        {
          channel_category: 17,
          create_time: 1704943494,
          frequency_configs: null,
          has_read: true,
          nid: 7322676240510058000,
          nid_str: "7322676240510058754",
          promote_notice: {
            ad_time: "2024-01-11 03:24:54",
            content: "The LIVE promotion you created on 11/01/2024 is currently under review.",
            schema_url: "",
            title: "LIVE promotion under review",
          },
          search_highlights: null,
          template_id: "Tpl_TikTok_497",
          template_notice: {
            create_time: 1704943494,
            has_read: true,
            legacy_sub_type: 0,
            message_extra:
              '{"notification_type":"official","enter_from":"notification_page","account_type":"PROMOTE","is_template":"1","content_id":"7322676240510058754","business_extra":"{\\"account_type\\":\\"promote\\"}"}',
            nid: 7322676240510058000,
            notice: {
              banner_schema_url: "",
              buttons: [],
              comment_image: null,
              content: "The LIVE promotion you created on 11/01/2024 is currently under review.",
              content_text_link_configs: null,
              middle_image_schema_urls: null,
              middle_image_urls: null,
              middle_type: 4,
              right_schema_url:
                "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787762827526145&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
              right_type: 13,
              title: { from_users: null, title: "LIVE promotion under review" },
            },
            schema_url:
              "aweme://webview/?url=https%3A%2F%2Flf-main-gecko-source.tiktokcdn.com%2Fobj%2Fbyte-gurd-source-sg%2F10%2Fgecko%2Fresource%2Ftiktok_promote_pia_next%2Fdetail.html%3F_pia_%3D1%26use_spark%3D1%26enter_from%3Dinbox%26link_from_service%3D1%26order_id%3D1787762827526145&disable_ttnet_proxy=0&hide_nav_bar=1&hide_status_bar=0&use_spark=1&dynamic=3&trans_status_bar=1&disable_bounces=1&webview_clear_color=1&use_forest=1",
            should_keep: true,
            type: 81,
            user_id: 7109365610580477000,
          },
          type: 81,
          user_id: 7109365610580477000,
        },
      ],
      notice_list_v2: null,
      total: 500,
    },
  ],
  status_code: 0,
  status_msg: "",
};

export default function RightPanel() {
  const t = useTranslations();

  return (
    <Tabs asChild defaultValue="table">
      <Container>
        <ContainerHeader>
          <div className="flex items-center">
            <Switch></Switch>
            <Button>{t("Compare")}</Button>
          </div>
          <TabsList className="ml-auto">
            <TabsTrigger value="text" className="text-zinc-600 dark:text-zinc-200">
              <Text className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="graph" className="text-zinc-600 dark:text-zinc-200">
              <Waypoints className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="table" className="text-zinc-600 dark:text-zinc-200">
              <Table2 className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </ContainerHeader>
        <ContainerContent>
          <TabsContent value="text" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <Editor />
          </TabsContent>
          {/* fix https://github.com/radix-ui/primitives/issues/1155#issuecomment-2041571341 */}
          <TabsContent value="graph" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <Graph />
          </TabsContent>
          <TabsContent value="table" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <JsonTable data={data}></JsonTable>
          </TabsContent>
        </ContainerContent>
      </Container>
    </Tabs>
  );
}
