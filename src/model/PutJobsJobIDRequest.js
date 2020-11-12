

import ApiClient from '../ApiClient';

/**
 * The PutJobsJobIDRequest model module.
 * @module model/PutJobsJobIDRequest
 * @version 1.0
 */
class PutJobsJobIDRequest {
    /**
     * Constructs a new <code>PutJobsJobIDRequest</code>.
     * PutJobsJobsIDRequest
     * @alias module:model/PutJobsJobIDRequest
     */
    constructor() { 
        
        PutJobsJobIDRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutJobsJobIDRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutJobsJobIDRequest} obj Optional instance to populate.
     * @return {module:model/PutJobsJobIDRequest} The populated <code>PutJobsJobIDRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutJobsJobIDRequest();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('cronExpression')) {
                obj['cronExpression'] = ApiClient.convertToType(data['cronExpression'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} displayName
 */
PutJobsJobIDRequest.prototype['displayName'] = undefined;

/**
 * @member {String} cronExpression
 */
PutJobsJobIDRequest.prototype['cronExpression'] = undefined;

/**
 * @member {Boolean} active
 */
PutJobsJobIDRequest.prototype['active'] = undefined;






export default PutJobsJobIDRequest;

