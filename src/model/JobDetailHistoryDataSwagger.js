

import ApiClient from '../ApiClient';

/**
 * The JobDetailHistoryDataSwagger model module.
 * @module model/JobDetailHistoryDataSwagger
 * @version 1.0
 */
class JobDetailHistoryDataSwagger {
    /**
     * Constructs a new <code>JobDetailHistoryDataSwagger</code>.
     * @alias module:model/JobDetailHistoryDataSwagger
     */
    constructor() { 
        
        JobDetailHistoryDataSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobDetailHistoryDataSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobDetailHistoryDataSwagger} obj Optional instance to populate.
     * @return {module:model/JobDetailHistoryDataSwagger} The populated <code>JobDetailHistoryDataSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobDetailHistoryDataSwagger();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('jobRunStartTime')) {
                obj['jobRunStartTime'] = ApiClient.convertToType(data['jobRunStartTime'], 'Date');
            }
            if (data.hasOwnProperty('jobRunEndTime')) {
                obj['jobRunEndTime'] = ApiClient.convertToType(data['jobRunEndTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('triggerType')) {
                obj['triggerType'] = ApiClient.convertToType(data['triggerType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} version
 */
JobDetailHistoryDataSwagger.prototype['version'] = undefined;

/**
 * @member {Date} jobRunStartTime
 */
JobDetailHistoryDataSwagger.prototype['jobRunStartTime'] = undefined;

/**
 * @member {Date} jobRunEndTime
 */
JobDetailHistoryDataSwagger.prototype['jobRunEndTime'] = undefined;

/**
 * @member {String} status
 */
JobDetailHistoryDataSwagger.prototype['status'] = undefined;

/**
 * @member {String} triggerType
 */
JobDetailHistoryDataSwagger.prototype['triggerType'] = undefined;






export default JobDetailHistoryDataSwagger;

