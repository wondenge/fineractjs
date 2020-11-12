


import ApiClient from "../ApiClient";

/**
* Notification service.
* @module api/NotificationApi
* @version 1.0
*/
export default class NotificationApi {

    /**
    * Constructs a new NotificationApi. 
    * @alias module:api/NotificationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllNotifications operation.
     * @callback module:api/NotificationApi~getAllNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderBy 
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.sortOrder 
     * @param {Boolean} opts.isRead 
     * @param {module:api/NotificationApi~getAllNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAllNotifications(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'orderBy': opts['orderBy'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortOrder': opts['sortOrder'],
        'isRead': opts['isRead']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/notifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update5 operation.
     * @callback module:api/NotificationApi~update5Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/NotificationApi~update5Callback} callback The callback function, accepting three arguments: error, data, response
     */
    update5(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/notifications', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
