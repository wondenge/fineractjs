

import ApiClient from '../ApiClient';
import PutSelfUserChanges from './PutSelfUserChanges';

/**
 * The PutSelfUserResponse model module.
 * @module model/PutSelfUserResponse
 * @version 1.0
 */
class PutSelfUserResponse {
    /**
     * Constructs a new <code>PutSelfUserResponse</code>.
     * PutSelfUserResponse
     * @alias module:model/PutSelfUserResponse
     */
    constructor() { 
        
        PutSelfUserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfUserResponse} obj Optional instance to populate.
     * @return {module:model/PutSelfUserResponse} The populated <code>PutSelfUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfUserResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutSelfUserChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutSelfUserResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutSelfUserResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSelfUserChanges} changes
 */
PutSelfUserResponse.prototype['changes'] = undefined;






export default PutSelfUserResponse;

