

import ApiClient from '../ApiClient';

/**
 * The CashierData model module.
 * @module model/CashierData
 * @version 1.0
 */
class CashierData {
    /**
     * Constructs a new <code>CashierData</code>.
     * @alias module:model/CashierData
     */
    constructor() { 
        
        CashierData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashierData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashierData} obj Optional instance to populate.
     * @return {module:model/CashierData} The populated <code>CashierData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashierData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tellerId')) {
                obj['tellerId'] = ApiClient.convertToType(data['tellerId'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('tellerName')) {
                obj['tellerName'] = ApiClient.convertToType(data['tellerName'], 'String');
            }
            if (data.hasOwnProperty('staffName')) {
                obj['staffName'] = ApiClient.convertToType(data['staffName'], 'String');
            }
            if (data.hasOwnProperty('fullDay')) {
                obj['fullDay'] = ApiClient.convertToType(data['fullDay'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CashierData.prototype['id'] = undefined;

/**
 * @member {Number} tellerId
 */
CashierData.prototype['tellerId'] = undefined;

/**
 * @member {Number} officeId
 */
CashierData.prototype['officeId'] = undefined;

/**
 * @member {Number} staffId
 */
CashierData.prototype['staffId'] = undefined;

/**
 * @member {String} description
 */
CashierData.prototype['description'] = undefined;

/**
 * @member {Date} startDate
 */
CashierData.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
CashierData.prototype['endDate'] = undefined;

/**
 * @member {String} startTime
 */
CashierData.prototype['startTime'] = undefined;

/**
 * @member {String} endTime
 */
CashierData.prototype['endTime'] = undefined;

/**
 * @member {String} officeName
 */
CashierData.prototype['officeName'] = undefined;

/**
 * @member {String} tellerName
 */
CashierData.prototype['tellerName'] = undefined;

/**
 * @member {String} staffName
 */
CashierData.prototype['staffName'] = undefined;

/**
 * @member {Boolean} fullDay
 */
CashierData.prototype['fullDay'] = undefined;






export default CashierData;

