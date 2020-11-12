

import ApiClient from '../ApiClient';
import GetGroupsGroupIdTimeline from './GetGroupsGroupIdTimeline';

/**
 * The GetGroupsGroupIdResponse model module.
 * @module model/GetGroupsGroupIdResponse
 * @version 1.0
 */
class GetGroupsGroupIdResponse {
    /**
     * Constructs a new <code>GetGroupsGroupIdResponse</code>.
     * GetGroupsGroupIdResponse
     * @alias module:model/GetGroupsGroupIdResponse
     */
    constructor() { 
        
        GetGroupsGroupIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdResponse} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdResponse} The populated <code>GetGroupsGroupIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetGroupsGroupIdTimeline.constructFromObject(data['timeline']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetGroupsGroupIdResponse.prototype['name'] = undefined;

/**
 * @member {String} externalId
 */
GetGroupsGroupIdResponse.prototype['externalId'] = undefined;

/**
 * @member {Number} officeId
 */
GetGroupsGroupIdResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetGroupsGroupIdResponse.prototype['officeName'] = undefined;

/**
 * @member {String} hierarchy
 */
GetGroupsGroupIdResponse.prototype['hierarchy'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdTimeline} timeline
 */
GetGroupsGroupIdResponse.prototype['timeline'] = undefined;






export default GetGroupsGroupIdResponse;

