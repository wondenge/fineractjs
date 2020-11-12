

import ApiClient from '../ApiClient';

/**
 * The GetJobsResponse model module.
 * @module model/GetJobsResponse
 * @version 1.0
 */
class GetJobsResponse {
    /**
     * Constructs a new <code>GetJobsResponse</code>.
     * GetJobsResponse
     * @alias module:model/GetJobsResponse
     */
    constructor() { 
        
        GetJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetJobsResponse} obj Optional instance to populate.
     * @return {module:model/GetJobsResponse} The populated <code>GetJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetJobsResponse();

            if (data.hasOwnProperty('jobId')) {
                obj['jobId'] = ApiClient.convertToType(data['jobId'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('nextRunTime')) {
                obj['nextRunTime'] = ApiClient.convertToType(data['nextRunTime'], 'Date');
            }
            if (data.hasOwnProperty('initializingError')) {
                obj['initializingError'] = ApiClient.convertToType(data['initializingError'], 'String');
            }
            if (data.hasOwnProperty('cronExpression')) {
                obj['cronExpression'] = ApiClient.convertToType(data['cronExpression'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('currentlyRunning')) {
                obj['currentlyRunning'] = ApiClient.convertToType(data['currentlyRunning'], 'Boolean');
            }
            if (data.hasOwnProperty('lastRunHistory')) {
                obj['lastRunHistory'] = ApiClient.convertToType(data['lastRunHistory'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} jobId
 */
GetJobsResponse.prototype['jobId'] = undefined;

/**
 * @member {String} displayName
 */
GetJobsResponse.prototype['displayName'] = undefined;

/**
 * @member {Date} nextRunTime
 */
GetJobsResponse.prototype['nextRunTime'] = undefined;

/**
 * @member {String} initializingError
 */
GetJobsResponse.prototype['initializingError'] = undefined;

/**
 * @member {String} cronExpression
 */
GetJobsResponse.prototype['cronExpression'] = undefined;

/**
 * @member {Boolean} active
 */
GetJobsResponse.prototype['active'] = undefined;

/**
 * @member {Boolean} currentlyRunning
 */
GetJobsResponse.prototype['currentlyRunning'] = undefined;

/**
 * @member {Object} lastRunHistory
 */
GetJobsResponse.prototype['lastRunHistory'] = undefined;






export default GetJobsResponse;

