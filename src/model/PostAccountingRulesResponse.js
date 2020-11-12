

import ApiClient from '../ApiClient';

/**
 * The PostAccountingRulesResponse model module.
 * @module model/PostAccountingRulesResponse
 * @version 1.0
 */
class PostAccountingRulesResponse {
    /**
     * Constructs a new <code>PostAccountingRulesResponse</code>.
     * PostAccountingRulesResponse
     * @alias module:model/PostAccountingRulesResponse
     */
    constructor() { 
        
        PostAccountingRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountingRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountingRulesResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountingRulesResponse} The populated <code>PostAccountingRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountingRulesResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostAccountingRulesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostAccountingRulesResponse.prototype['resourceId'] = undefined;






export default PostAccountingRulesResponse;

