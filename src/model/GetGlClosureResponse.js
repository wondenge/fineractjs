

import ApiClient from '../ApiClient';

/**
 * The GetGlClosureResponse model module.
 * @module model/GetGlClosureResponse
 * @version 1.0
 */
class GetGlClosureResponse {
    /**
     * Constructs a new <code>GetGlClosureResponse</code>.
     * GetGLClosureResponse
     * @alias module:model/GetGlClosureResponse
     */
    constructor() { 
        
        GetGlClosureResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGlClosureResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGlClosureResponse} obj Optional instance to populate.
     * @return {module:model/GetGlClosureResponse} The populated <code>GetGlClosureResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGlClosureResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('closingDate')) {
                obj['closingDate'] = ApiClient.convertToType(data['closingDate'], 'Date');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdatedDate')) {
                obj['lastUpdatedDate'] = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
            }
            if (data.hasOwnProperty('createdByUserId')) {
                obj['createdByUserId'] = ApiClient.convertToType(data['createdByUserId'], 'Number');
            }
            if (data.hasOwnProperty('createdByUsername')) {
                obj['createdByUsername'] = ApiClient.convertToType(data['createdByUsername'], 'String');
            }
            if (data.hasOwnProperty('lastUpdatedByUserId')) {
                obj['lastUpdatedByUserId'] = ApiClient.convertToType(data['lastUpdatedByUserId'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdatedByUsername')) {
                obj['lastUpdatedByUsername'] = ApiClient.convertToType(data['lastUpdatedByUsername'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGlClosureResponse.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetGlClosureResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetGlClosureResponse.prototype['officeName'] = undefined;

/**
 * @member {Date} closingDate
 */
GetGlClosureResponse.prototype['closingDate'] = undefined;

/**
 * @member {Boolean} deleted
 */
GetGlClosureResponse.prototype['deleted'] = undefined;

/**
 * @member {Date} createdDate
 */
GetGlClosureResponse.prototype['createdDate'] = undefined;

/**
 * @member {Date} lastUpdatedDate
 */
GetGlClosureResponse.prototype['lastUpdatedDate'] = undefined;

/**
 * @member {Number} createdByUserId
 */
GetGlClosureResponse.prototype['createdByUserId'] = undefined;

/**
 * @member {String} createdByUsername
 */
GetGlClosureResponse.prototype['createdByUsername'] = undefined;

/**
 * @member {Number} lastUpdatedByUserId
 */
GetGlClosureResponse.prototype['lastUpdatedByUserId'] = undefined;

/**
 * @member {String} lastUpdatedByUsername
 */
GetGlClosureResponse.prototype['lastUpdatedByUsername'] = undefined;

/**
 * @member {String} comments
 */
GetGlClosureResponse.prototype['comments'] = undefined;






export default GetGlClosureResponse;

