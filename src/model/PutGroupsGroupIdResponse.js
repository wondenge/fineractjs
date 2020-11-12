

import ApiClient from '../ApiClient';
import PutGroupsGroupIdChanges from './PutGroupsGroupIdChanges';

/**
 * The PutGroupsGroupIdResponse model module.
 * @module model/PutGroupsGroupIdResponse
 * @version 1.0
 */
class PutGroupsGroupIdResponse {
    /**
     * Constructs a new <code>PutGroupsGroupIdResponse</code>.
     * PutGroupsGroupIdResponse
     * @alias module:model/PutGroupsGroupIdResponse
     */
    constructor() { 
        
        PutGroupsGroupIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGroupsGroupIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGroupsGroupIdResponse} obj Optional instance to populate.
     * @return {module:model/PutGroupsGroupIdResponse} The populated <code>PutGroupsGroupIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGroupsGroupIdResponse();

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
                obj['changes'] = PutGroupsGroupIdChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutGroupsGroupIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PutGroupsGroupIdResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutGroupsGroupIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutGroupsGroupIdChanges} changes
 */
PutGroupsGroupIdResponse.prototype['changes'] = undefined;






export default PutGroupsGroupIdResponse;

