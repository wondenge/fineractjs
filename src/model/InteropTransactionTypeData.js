

import ApiClient from '../ApiClient';

/**
 * The InteropTransactionTypeData model module.
 * @module model/InteropTransactionTypeData
 * @version 1.0
 */
class InteropTransactionTypeData {
    /**
     * Constructs a new <code>InteropTransactionTypeData</code>.
     * @alias module:model/InteropTransactionTypeData
     * @param scenario {module:model/InteropTransactionTypeData.ScenarioEnum} 
     * @param initiator {module:model/InteropTransactionTypeData.InitiatorEnum} 
     * @param initiatorType {module:model/InteropTransactionTypeData.InitiatorTypeEnum} 
     */
    constructor(scenario, initiator, initiatorType) { 
        
        InteropTransactionTypeData.initialize(this, scenario, initiator, initiatorType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scenario, initiator, initiatorType) { 
        obj['scenario'] = scenario;
        obj['initiator'] = initiator;
        obj['initiatorType'] = initiatorType;
    }

    /**
     * Constructs a <code>InteropTransactionTypeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransactionTypeData} obj Optional instance to populate.
     * @return {module:model/InteropTransactionTypeData} The populated <code>InteropTransactionTypeData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransactionTypeData();

            if (data.hasOwnProperty('scenario')) {
                obj['scenario'] = ApiClient.convertToType(data['scenario'], 'String');
            }
            if (data.hasOwnProperty('subScenario')) {
                obj['subScenario'] = ApiClient.convertToType(data['subScenario'], 'String');
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = ApiClient.convertToType(data['initiator'], 'String');
            }
            if (data.hasOwnProperty('initiatorType')) {
                obj['initiatorType'] = ApiClient.convertToType(data['initiatorType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InteropTransactionTypeData.ScenarioEnum} scenario
 */
InteropTransactionTypeData.prototype['scenario'] = undefined;

/**
 * @member {String} subScenario
 */
InteropTransactionTypeData.prototype['subScenario'] = undefined;

/**
 * @member {module:model/InteropTransactionTypeData.InitiatorEnum} initiator
 */
InteropTransactionTypeData.prototype['initiator'] = undefined;

/**
 * @member {module:model/InteropTransactionTypeData.InitiatorTypeEnum} initiatorType
 */
InteropTransactionTypeData.prototype['initiatorType'] = undefined;





/**
 * Allowed values for the <code>scenario</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransactionTypeData['ScenarioEnum'] = {

    /**
     * value: "DEPOSIT"
     * @const
     */
    "DEPOSIT": "DEPOSIT",

    /**
     * value: "WITHDRAWAL"
     * @const
     */
    "WITHDRAWAL": "WITHDRAWAL",

    /**
     * value: "TRANSFER"
     * @const
     */
    "TRANSFER": "TRANSFER",

    /**
     * value: "PAYMENT"
     * @const
     */
    "PAYMENT": "PAYMENT",

    /**
     * value: "REFUND"
     * @const
     */
    "REFUND": "REFUND"
};


/**
 * Allowed values for the <code>initiator</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransactionTypeData['InitiatorEnum'] = {

    /**
     * value: "PAYER"
     * @const
     */
    "PAYER": "PAYER",

    /**
     * value: "PAYEE"
     * @const
     */
    "PAYEE": "PAYEE"
};


/**
 * Allowed values for the <code>initiatorType</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransactionTypeData['InitiatorTypeEnum'] = {

    /**
     * value: "CONSUMER"
     * @const
     */
    "CONSUMER": "CONSUMER",

    /**
     * value: "AGENT"
     * @const
     */
    "AGENT": "AGENT",

    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",

    /**
     * value: "DEVICE"
     * @const
     */
    "DEVICE": "DEVICE"
};



export default InteropTransactionTypeData;

