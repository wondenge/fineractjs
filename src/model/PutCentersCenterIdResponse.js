

import ApiClient from '../ApiClient';
import PutCentersChanges from './PutCentersChanges';

/**
 * The PutCentersCenterIdResponse model module.
 * @module model/PutCentersCenterIdResponse
 * @version 1.0
 */
class PutCentersCenterIdResponse {
    /**
     * Constructs a new <code>PutCentersCenterIdResponse</code>.
     * PutCentersCenterIdResponse
     * @alias module:model/PutCentersCenterIdResponse
     */
    constructor() { 
        
        PutCentersCenterIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCentersCenterIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCentersCenterIdResponse} obj Optional instance to populate.
     * @return {module:model/PutCentersCenterIdResponse} The populated <code>PutCentersCenterIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCentersCenterIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutCentersChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutCentersCenterIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PutCentersCenterIdResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutCentersCenterIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutCentersChanges} changes
 */
PutCentersCenterIdResponse.prototype['changes'] = undefined;






export default PutCentersCenterIdResponse;

