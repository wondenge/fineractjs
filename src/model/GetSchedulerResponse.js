

import ApiClient from '../ApiClient';

/**
 * The GetSchedulerResponse model module.
 * @module model/GetSchedulerResponse
 * @version 1.0
 */
class GetSchedulerResponse {
    /**
     * Constructs a new <code>GetSchedulerResponse</code>.
     * GetSchedulerResponse
     * @alias module:model/GetSchedulerResponse
     */
    constructor() { 
        
        GetSchedulerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSchedulerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSchedulerResponse} obj Optional instance to populate.
     * @return {module:model/GetSchedulerResponse} The populated <code>GetSchedulerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSchedulerResponse();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
GetSchedulerResponse.prototype['active'] = undefined;






export default GetSchedulerResponse;

