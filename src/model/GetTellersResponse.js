

import ApiClient from '../ApiClient';

/**
 * The GetTellersResponse model module.
 * @module model/GetTellersResponse
 * @version 1.0
 */
class GetTellersResponse {
    /**
     * Constructs a new <code>GetTellersResponse</code>.
     * GetTellersResponse
     * @alias module:model/GetTellersResponse
     */
    constructor() { 
        
        GetTellersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersResponse} The populated <code>GetTellersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('debitAccountId')) {
                obj['debitAccountId'] = ApiClient.convertToType(data['debitAccountId'], 'Number');
            }
            if (data.hasOwnProperty('creditAccountId')) {
                obj['creditAccountId'] = ApiClient.convertToType(data['creditAccountId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTellersResponse.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetTellersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} debitAccountId
 */
GetTellersResponse.prototype['debitAccountId'] = undefined;

/**
 * @member {Number} creditAccountId
 */
GetTellersResponse.prototype['creditAccountId'] = undefined;

/**
 * @member {String} name
 */
GetTellersResponse.prototype['name'] = undefined;

/**
 * @member {Date} startDate
 */
GetTellersResponse.prototype['startDate'] = undefined;

/**
 * @member {module:model/GetTellersResponse.StatusEnum} status
 */
GetTellersResponse.prototype['status'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersResponse.prototype['officeName'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GetTellersResponse['StatusEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",

    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"
};



export default GetTellersResponse;

